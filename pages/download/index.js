import React from 'react'
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Layout from '../../components/Layout';

const index = () => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
        <Layout>
            <div className='container'>
                <h2 className='text-center mt-5'>Download Page</h2>
                <div>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl="/file/coursework.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                    />
                    </Worker>
                </div>
            </div>
        </Layout>

    </>
  )
}

export default index