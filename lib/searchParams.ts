type SearchParamValue = string | string[] | undefined;

/**
 * Parses a search parameter value (which can be string, string[], or undefined)
 * into a consistent array of strings. Handles comma-separated strings.
 *
 * @param param The raw search parameter value from next/navigation.
 * @returns An array of strings.
 */
export function parseSearchParamToArray(param: SearchParamValue): string[] {
  if (Array.isArray(param)) {
    return param;
  }
  if (typeof param === "string") {
    return param.split(",").filter(Boolean);
  }
  return [];
}

/**
 * Converts an array of strings into URLSearchParams,
 * appending each item as a separate parameter.
 *
 * @param params The URLSearchParams object to append to.
 * @param name The name of the parameter (e.g., "category").
 * @param values An array of string values.
 */
export default function appendArrayToSearchParams(
  params: URLSearchParams,
  name: string,
  values: string[]
) {
  values.forEach((value) => {
    params.append(name, value);
  });
}
