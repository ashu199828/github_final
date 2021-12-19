async function FetchGraphQL(text, variables) {
  const TOKEN = localStorage.getItem("token");
  console.log(TOKEN);
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer  ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return response.json();
}

export default FetchGraphQL;
