import "@testing-library/jest-dom";
import { githubUsername, skillData, resume, filteredProjects } from "./data";

test("All data variables are defined", () => {
  expect(githubUsername).toBe("claudioMontanari");
  expect(skillData.length).toBeGreaterThan(0);
  expect(filteredProjects.length).toBeGreaterThan(0);
  expect(resume).toBeDefined();
});
