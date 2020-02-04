import Endpoint from "../network/Endpoint";
import fetchAPI from "../network/Client";

class RemoteRepository {
    constructor(onProcess, onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onProcess = onProcess;
        this.onFailed = onFailed;
    }

    async getUserRepos(user) {
        this.onProcess(true);
        const endpoint = Endpoint.getUserRepos(user);
        try{
            const response = await fetchAPI(endpoint);
            this.onSuccess(await response.json());
            this.onProcess(false);
        } catch (error) {
            this.onFailed(error);
            this.onProcess(false);
        }
    }
}

export default RemoteRepository;