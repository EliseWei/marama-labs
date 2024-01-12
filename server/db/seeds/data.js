/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('data').del()
  await knex('data').insert([
    { id: 1, name: 'Office Map' },
    { id: 2, name: 'New Employee Onboarding' },
    { id: 8, name: 'Onboarding Materials', parent_id: 2 },
    { id: 9, name: 'Training', parent_id: 2 },
    { id: 3, name: 'Office Events' },
    { id: 6, name: '2018', parent_id: 3 },
    { id: 10, name: 'Summer Picnic', parent_id: 6 },
    { id: 11, name: "Valentine's Day Party", parent_id: 6 },
    { id: 12, name: "New Year's Party", parent_id: 6 },
    { id: 7, name: '2017', parent_id: 3 },
    { id: 13, name: 'Company Anniversary Celebration', parent_id: 7 },
    { id: 4, name: 'Public Holidays' },
    { id: 5, name: 'Vacations and Sick Leaves' },
  ])
}
