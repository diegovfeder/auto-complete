import { Country, Suggestion } from "../../types";

/**
 * Converts an array of Country objects to an array of Suggestion objects for use in
 * autocomplete or dropdown components. Each Suggestion is generated from the corresponding
 * Country, with the country's code as the `id` and a formatted string combining the country's
 * icon, name, and abbreviation as the `label`.
 *
 * @param {Country[]} countries - An array of Country objects to be transformed.
 * @returns {Suggestion[]} An array of Suggestion objects, each containing an `id` and a `label`.
 */
export default function mapCountriesToSuggestions(
  countries: Country[]
): Suggestion[] {
  return countries.map((country) => ({
    id: country.code,
    label: `${country.icon} ${country.name} - ${country.abbr}`,
  }));
}
