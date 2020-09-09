import { execSync } from "child_process";
import * as dbadapters from "df/api/dbadapters";
import { sleepUntil } from "df/common/promises";
import { IHookHandler } from "df/testing";

const USE_CLOUD_BUILD_NETWORK = !!process.env.USE_CLOUD_BUILD_NETWORK;
const DOCKER_CONTAINER_NAME = "presto-df-integration-testing";
const PRESTO_SERVE_PORT = 8080;

export class PrestoFixture {
  public static readonly host = USE_CLOUD_BUILD_NETWORK ? DOCKER_CONTAINER_NAME : "localhost";

  private static imageLoaded = false;

  constructor(port: number, setUp: IHookHandler, tearDown: IHookHandler) {
    setUp("starting presto", async () => {
    //   if (!PrestoFixture.imageLoaded) {
    //     // Load the presto image into the local Docker daemon.
    //     execSync("tools/presto/presto_image.executable");
    //     PrestoFixture.imageLoaded = true;
    //   }
    //   // Run the presto Docker image.
    //   // This running container can be interacted with via the include CLI using:
    //   // `docker exec -it presto presto --catalog tpch --schema sf1`
    //   // (Catalog and schema conform to the default provided within the image).
    //   execSync(
    //     [
    //       "docker run",
    //       "--rm",
    //       `--name ${DOCKER_CONTAINER_NAME}`,
    //       "-d",
    //       `-p ${port}:${PRESTO_SERVE_PORT}`,
    //       USE_CLOUD_BUILD_NETWORK ? "--network cloudbuild" : "",
    //       "bazel/tools/presto:presto_image"
    //     ].join(" ")
    //   );
    //   const dbadapter = await dbadapters.create(
    //     {
    //       // ?? presto doesn't need anything...
    //     },
    //     "presto",
    //     { disableSslForTestsOnly: true }
    //   );
    //   // Block until presto is ready to accept requests.
    //   await sleepUntil(async () => {
    //     try {
    //       await dbadapter.execute("select 1");
    //       return true;
    //     } catch (e) {
    //       return false;
    //     }
    //   });
    // });

    // tearDown("stopping presto", () => {
    //   execSync(`docker stop ${DOCKER_CONTAINER_NAME}`);
    // });
  }
}
