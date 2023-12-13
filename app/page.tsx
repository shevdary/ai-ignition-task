import { AppProps } from 'next/app';
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import './global.css';

export default function Home() {
  return (
      <HomePage />
  );
}
