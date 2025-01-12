export const useGitHubInfo =() => {
    let photo = '';
    let repositories = [
    { name: "Repo 1", image: "image1.png", url: "https://github.com/repo1" },
    { name: "Repo 2", image: "image2.png", url: "https://github.com/repo2" },
];

    let url = '';


    return {photo, repositories, url}
}

