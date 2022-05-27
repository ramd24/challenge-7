import Navbar from '../components/Navbar'
import Image from 'next/image'
import HomeLayout from '../components/HomeLayout'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <HomeLayout />
      </Layout>
    </>
  )
}
