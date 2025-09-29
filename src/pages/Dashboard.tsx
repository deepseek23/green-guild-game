import { Navigation } from "@/components/Navigation";
import { Dashboard as DashboardComponent } from "@/components/Dashboard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <DashboardComponent />
      </div>
    </div>
  );
};

export default Dashboard;