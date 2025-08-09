import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import hotlinePdf from '../../assets/hotline-page.pdf'

const Hotline = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Goes back to the previous page in history
  }

  return (
    <div className="hotline-container p-2" style={{ maxWidth: '95vw', margin: '0 auto' }}>
      {/* Header with back button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Crisis Hotline Information</h2>
        <Button
          variant="outline-primary"
          onClick={handleGoBack}
          className="d-flex align-items-center"
        >
          <span className="me-2">←</span> Back
        </Button>
      </div>

      {/* PDF Viewer - Wider view */}
      <div
        className="pdf-viewer-container"
        style={{
          height: '85vh',
          width: '100%'
        }}
      >
        <iframe
          src={hotlinePdf}
          width="100%"
          height="100%"
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px'
          }}
          title="Crisis Hotline PDF"
        >
          <div className="text-center p-4">
            <p>Your browser does not support viewing PDFs directly.</p>
            <a
              href={hotlinePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download PDF
            </a>
          </div>
        </iframe>
      </div>

      {/* Additional actions */}
      <div className="text-center mt-3 d-flex justify-content-center gap-3">
        <a
          href={hotlinePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary"
        >
          Open in New Tab
        </a>
        <Button
          variant="secondary"
          onClick={handleGoBack}
        >
          Return to Previous Page
        </Button>
      </div>
    </div>
  )
}

export default Hotline
