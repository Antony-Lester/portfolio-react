import { useState, useEffect } from 'react';
import { loadCertificates, handleCertificateClick, getCertificateIcon } from '../utils/cert-loader';
import '../styling/Certs.css'

export default function Certs() { 
    const [certs, setCerts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCerts = async () => {
            try {
                setLoading(true);
                const certificates = loadCertificates();
                setCerts(certificates);
            } catch (error) {
                console.error('Error loading certificates:', error);
            } finally {
                setLoading(false);
            }
        };

        loadCerts();
    }, []);

    if (loading) {
        return (
            <div className='main scroll'>
                <div className='loading-container'>
                    <div className='loading-spinner'></div>
                    <p>Loading certificates...</p>
                </div>
            </div>
        );
    }

    if (certs.length === 0) {
        return (
            <div className='main scroll'>
                <div className='empty-state'>
                    <svg className='empty-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor"/>
                        <path d="M14 2V8H20" stroke="white" strokeWidth="2"/>
                    </svg>
                    <h3>No Certificates Found</h3>
                    <p>Drop your certificate images or PDFs into the <code>/src/images/certs/</code> folder and they'll appear here automatically!</p>
                </div>
            </div>
        );
    }

    return (
        <div className='main scroll'>
            <div className='certs-header'>
                <h2>My Certificates</h2>
                <p>{certs.length} certificate{certs.length !== 1 ? 's' : ''} found</p>
            </div>
            <div className='certs-grid'>
                {certs.map((cert, index) => (
                    <div 
                        key={index} 
                        className={`cert-card ${cert.isPdf ? 'cert-pdf' : 'cert-image'}`}
                        onClick={() => handleCertificateClick(cert)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleCertificateClick(cert);
                            }
                        }}
                    >
                        {cert.isPdf ? (
                            <div className='cert-pdf-preview'>
                                {getCertificateIcon(cert)}
                                <h3 className='cert-name'>{cert.displayName}</h3>
                                <p className='cert-type'>PDF Document</p>
                            </div>
                        ) : (
                            <div className='cert-image-container'>
                                <img 
                                    className="cert-image" 
                                    src={cert.src} 
                                    alt={cert.displayName}
                                    loading="lazy"
                                />
                                <div className='cert-overlay'>
                                    <h3 className='cert-name'>{cert.displayName}</h3>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}