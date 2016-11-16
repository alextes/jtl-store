import knex from './knex';

export function retrieve(id: number): Promise<Object[]> {
  return knex('jobs').select().where('id', id);
}

export function store(source: string, jobDescription: string): Promise<number> {
  return knex('jobs')
    .insert({
      source,
      job_description: jobDescription,
    })
    .returning('id');
}

