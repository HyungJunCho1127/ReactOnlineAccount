import PolicyWidget from "../components/PolicyWidget";
import UserWidget from "../components/UserWidget";
import { policies } from "../data/mockData";
import { useLocation } from "react-router-dom";
import styles from './Dashboard.module.css'

export default function Dashboard(){

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const policyNumber = params.get("policy") || 'test';

  const { user, policy } = policies[policyNumber];

    return (
        <div className={styles.page} >
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.widgetGrid}>
                <UserWidget user={user} />
                <PolicyWidget policy={policy} />
            </div>
        </div>
    )
}