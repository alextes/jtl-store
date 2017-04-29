// @flow
import { omit } from 'lodash';
import { getOne, store, translateToISO, translateFromISO } from './jobs';
import type { Job, RawJob } from './jobs';
import knex from './knex';

const jobProps = {
  createdAt:   1493410019,
  description: 'The developer job everyone wants.',
  source:      'Job Board',
  updatedAt:   1493410019,
};

afterAll(() => (
  knex('jobs').del().where('source', jobProps.source)
    .then(knex.destroy)
));

test('should create a job', async () => {
  const id: number        = await store(jobProps);
  const [job]: Array<Job> = await knex('jobs').select().where('id', id);
  const jobNoID           = omit(job, 'id');

  expect(jobNoID).toMatchSnapshot();
});

test('should add defaults when needed', async () => {
  const baseJob        = omit(jobProps, 'id', 'createdAt', 'updatedAt');
  const id: number     = await store(baseJob);
  const rawJob: RawJob = await knex('jobs').select().first().where('id', id);
  const job: Job       = translateFromISO(rawJob);

  expect(job.id).toBe(id);
  expect(typeof job.createdAt).toBe('string');
  expect(typeof job.updatedAt).toBe('string');
});

test('should get one a stored job', async () => {
  const [id]: Array<number> = await knex('jobs')
    .insert(translateToISO(jobProps))
    .returning('id');
  const job     = await getOne(id);
  const jobNoID = omit(job, 'id');

  expect(job.id).toBe(id);
  expect(jobNoID).toMatchSnapshot();
});
