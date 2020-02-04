import RemoteRepository from "../../data/remote/repository/RemoteRepository";
import User from "../../data/user/User";
import BasePage from "../base/BasePage";

class LandingPage extends BasePage {

    constructor() {
        super();
    }

    start() {
        const remoteRepository = new RemoteRepository(this.onProcess, this.onSuccess, this.onFailed);
        remoteRepository.getUserRepos(User.github);
    }

    onProcess(isProcess) {
        console.log(`isProses: ${isProcess}`);
    }

    onSuccess(repos) {
        console.log(repos);
    }

    onFailed(error) {
        console.log(error);
    }
}
export default LandingPage;