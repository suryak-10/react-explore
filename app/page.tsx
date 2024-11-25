import dynamic from "next/dynamic";
import Image from "next/image";
const AdminApp = dynamic(() => import("@/app/components/AdminApp"), { ssr: false });

const Home = () => <AdminApp/>

export default Home