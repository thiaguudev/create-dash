import Config from "./components/Config";
import { Header } from "./components/Header";
import Question from "./components/Question";
import Status from "./components/Status";
import StatusItem from "./components/Status/item";

export default function App() {
  return (
    <main className="min-h-screen antialiased">
      <div className="flex min-h-screen grow">
        <Header />
        <div className="flex flex-col w-full">
          <Status pageTitle="New Nps Survey" config={<Config />}>
            <StatusItem title="Build" active />
            <StatusItem title="Configure" />
            <StatusItem title="Share" />
            <StatusItem title="Result" />
          </Status>

          <Question />
        </div>
      </div>
    </main>
  );
}
