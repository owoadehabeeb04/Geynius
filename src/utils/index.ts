import html2canvas from 'html2canvas'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { pdfjs } from 'react-pdf'
import { jsPDF } from 'jspdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

export const hideDivByClassName = (className: string): void => {
    const elements = document?.getElementsByClassName(className)
    for (let i = 0; i < elements?.length; i++) {
      ;(elements[i] as HTMLElement).style.display = 'none'
    }
}

export const createScreenshotPDF = (id: string, username: string) => {
    const MARGIN = 0
    // get the content element
    const content: any = document.getElementById(id)

    // get content size
    const width = content?.offsetWidth
    const height = content?.offsetHeight

    // call html2canvas to save the screenshot to a pdf file
    html2canvas(content, {
      scrollX: 0, // scroll to X origin
      scrollY: 0, // scroll to Y origin
      scale: 5, // 5 is quality scale
    }).then(function (canvas: any) {
      // convert the canvas conent to a Data URI/URL
      const img = canvas.toDataURL('image/jpeg', 1) // 5 is quality scale
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px', // set pixel as unit
        format: [width, height],
      })

      // add canvas as an image
      doc.addImage(img, 'JPEG', MARGIN, MARGIN, width, height)

      // save the content as a pdf file downloadable by user
      doc.save(`${username || Math.random().toString(36).slice(2, 11)}.pdf`)
    })
  }



  export const ExportToDoc = async (element: string, filename: string )=>{
    const doc = (window.document as any);
    const htmlString = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>${doc.getElementById(element).innerHTML}</body>
    </html>`;
    const fileData = await asBlob(htmlString, {
      orientation: 'portrait',
    }); 
    saveAs(fileData, `${filename || Math.random().toString(36).slice(2, 11)}.docx`); // save as docx file
    
  }
