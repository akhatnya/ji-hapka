import Error from "next/error";

function Custom500() {
  return <Error statusCode={500} title="Server Error" />;
}

export default Custom500;
