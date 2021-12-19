import { Environment, Network, RecordSource, Store } from "relay-runtime";
import FetchGraphQL from "./FetchGraphQL";

async function fetchRelay(params, variables) {
    console.log(
        `fetching query ${params.name} with ${JSON.stringify(variables)}`
    );
    return await FetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment conf2igured with our network function:
const env = new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});

export default env;