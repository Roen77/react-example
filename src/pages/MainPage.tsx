import Card from "../components/Card";

function MainPage() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div>
        <Card title="Redux-Saga로 무한 스크롤 기능 구현" href="/saga" />
        <Card title="Redux-Query로 무한 스크롤 기능 구현" href="/query" />
      </div>
    </div>
  );
}

export default MainPage;
