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
    // Select the first safely because id has the unique constraint.
    .first()
    .where('id', id);
}

export function store(source: string, jobDescription: string): Promise<number> {
  return knex('jobs')
    .insert({
      source,
      job_description: jobDescription,
    })
    .returning('id')
    // Select the first safely because we only store one at a time
    .then(rows => rows[0]);
}
