/* @flow */
import camelCaseKeys from './camel-case-keys';
import knex from './knex';

type Job = {
  id: number,
  source: string,
  jobDescription: string,
  createdAt: number,
  updatedAt: number,
};

export function retrieve(id: number): Promise<Job> {
  return knex('jobs')
    .select()
    .where('id', id)
    // Select the first safely because id has the unique constraint.
    .then(jobs => camelCaseKeys(jobs[0]));
}

export function store(source: string, jobDescription: string): Promise<number> {
  return knex('jobs')
    .insert({
      source,
      job_description: jobDescription,
    })
    .returning('id');
}
