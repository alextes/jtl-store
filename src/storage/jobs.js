/* @flow */
import { omit } from 'lodash';
import moment from 'moment';
import knex from './knex';

export type JobProps = {
  createdAt: ?number,
  description: string,
  source: string,
  updatedAt: ?number,
}

export type RawJob = {
  createdAt: string,
  description: string,
  id: number,
  source: string,
  updatedAt: string,
}

export type Job = {
  createdAt: number,
  description: string,
  id: number,
  source: string,
  updatedAt: number,
};

export function translateFromISO(rawJob: RawJob): Job {
  return {
    ...rawJob,
    createdAt: moment.utc(rawJob.createdAt, moment.ISO_8601).format('X'),
    updatedAt: moment.utc(rawJob.updatedAt, moment.ISO_8601).format('X'),
  };
}

export function translateToISO(jobProps: JobProps) {
  return {
    ...jobProps,
    createdAt: moment.utc(jobProps.createdAt).toISOString(),
    updatedAt: moment.utc(jobProps.updatedAt).toISOString(),
  };
}

export function getOne(id: number): Promise<Job> {
  return knex('jobs')
    // Select the first safely because id has the unique constraint.
    .first()
    .where('id', id)
    .then(translateFromISO);
}

export function store(props: JobProps): Promise<number> {
  return knex('jobs')
    .insert(translateToISO(props))
    .returning('id')
    // Select the first safely because we only store one at a time
    .then(rows => rows[0]);
}
