// File: src/types/global.d.ts

// TypeScript declaration to allow importing JSON files
declare module '*.json' {
  // Option 1: Default to any if exact typing isn't feasible
  const value: any;
  export default value;

  // Option 2: Define common structures if applicable
  // interface Config {
  //     setting1: string;
  //     setting2: number;
  // }
  // const value: Config;
  // export default value;
}