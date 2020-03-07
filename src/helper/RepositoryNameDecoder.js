class RepositoryNameDecoder {
    static getData = (encodedRepositoryName) => {
        let decodedRepositoryName = decodeURIComponent(encodedRepositoryName);
        let repositoryData = decodedRepositoryName.split('/');

        return {
            repositoryOwner: repositoryData[0],
            repositoryName: repositoryData[1]
        };
    };
}

export default RepositoryNameDecoder;
