import { render, screen } from "@testing-library/react-native";
import { within } from "@testing-library/react-native";
import RepositoryListContainer from "../components/RepositoryListContainer";

const repositories = {
  "repositories": {
    "__typename": "RepositoryConnection",
    "edges": [
      {
        "__typename": "RepositoryEdge",
        "node": {
          "__typename": "Repository",
          "id": "jaredpalmer.formik",
          "forksCount": 2791,
          "fullName": "jaredpalmer/formik",
          "language": "TypeScript",
          "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/4060187?v=4",
          "ratingAverage": 90,
          "reviewCount": 5,
          "stargazersCount": 34381
        }
      },
      {
        "__typename": "RepositoryEdge",
        "node": {
          "__typename": "Repository",
          "id": "async-library.react-async",
          "forksCount": 90,
          "fullName": "async-library/react-async",
          "language": "JavaScript",
          "ownerAvatarUrl": "https://avatars.githubusercontent.com/u/54310907?v=4",
          "ratingAverage": 72,
          "reviewCount": 3,
          "stargazersCount": 2145
        }
      }
    ]
  }
};

describe("RepositoryItem", () => {
  test("data renders", () => {
    render(<RepositoryListContainer repositories={repositories} />)
    const repositoryItems = screen.getAllByTestId('repositoryItem');
    [firstRepo, secondRepo] = repositoryItems;
    expect(firstRepo).toBeVisible();
    expect(secondRepo).toBeVisible();
    const firstRepoName = within(firstRepo).getByText("jaredpalmer/formik");
    expect(firstRepoName).toHaveTextContent("jaredpalmer/formik");
    const firstRepoRating = within(firstRepo).getByText("90");
    expect(firstRepoRating).toHaveTextContent("90");
    const secondRepoLanguage = within(secondRepo).getByText("JavaScript");
    expect(secondRepoLanguage).toHaveTextContent("JavaScript");
    const secondRepoStars = within(secondRepo).getByText("2.1k");
    expect(secondRepoStars).toHaveTextContent("2.1k");
  })
})
