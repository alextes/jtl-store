/* @flow */
import test from 'ava';
import { omit } from 'lodash';
import camelCaseKeys from '../../src/storage/camel-case-keys';
import mockJob from '../mock/job';
import { retrieve, store } from '../../src/storage/job';
import knex from '../../src/storage/knex';

/**
 * Returns a new object with all generated properties removed
 * @param job - a job object retrieved by storage
 * @returns {Job}
 */
function getBaseJob(job: Object): Object {
  return omit(job, 'id', 'createdAt', 'updatedAt');
}

/**
 * should
 * 1. store it
 * 2. save source and jobDescription
 * 3. set the created_at and updated_at
 */
test('should store a job correctly', async (t) => {
  const id: number = await store(mockJob.source, mockJob.jobDescription);
  const [retrievedJob] = await knex('jobs').select().where('id', id);

  // manually do the translation storage does
  const camelCasedJob = camelCaseKeys(retrievedJob);
  const job = getBaseJob(camelCasedJob);

  t.true(retrievedJob.created_at != null);
  t.true(retrievedJob.updated_at != null);
  t.deepEqual(mockJob, job);
});

test('should retrieve a stored job', async (t) => {
  const [id] = await knex('jobs')
    .insert({
      source:          mockJob.source,
      job_description: mockJob.jobDescription,
    })
    .returning('id');
  const retrievedJob = await retrieve(id);
  const camelCasedJob = camelCaseKeys(retrievedJob);
  const job = getBaseJob(camelCasedJob);

  t.deepEqual(mockJob, job);
});

test.after.always(() => knex('jobs').del().where('source', mockJob.source));
