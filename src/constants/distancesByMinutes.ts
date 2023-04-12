const DISTANCES_BY_MINUTES = [5, 10, 15, 20, 30] as const;

export type DistancesByMinutes = (typeof DISTANCES_BY_MINUTES)[number];

export default DISTANCES_BY_MINUTES;
