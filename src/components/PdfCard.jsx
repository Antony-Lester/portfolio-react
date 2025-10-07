import { useState, useEffect } from 'react';
import { getPdfThumbnail, getCertificateIcon } from '../utils/cert-loader';

const PdfCard = ({ cert, onClick }) => {
    const [thumbnail, setThumbnail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadThumbnail = async () => {
            try {
                setLoading(true);
                setError(false);
                const thumbnailUrl = await getPdfThumbnail(cert.src);
                if (thumbnailUrl) {
                    setThumbnail(thumbnailUrl);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error('Error loading PDF thumbnail:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadThumbnail();
    }, [cert.src]);

    if (loading) {
        return (
            <div className='cert-card cert-pdf' onClick={onClick} role="button" tabIndex={0}>
                <div className='cert-pdf-preview'>
                    <div className='pdf-thumbnail-loading'>
                        <div className='loading-spinner'></div>
                        <p>Generating preview...</p>
                    </div>
                    <h3 className='cert-name'>{cert.displayName}</h3>
                    <p className='cert-type'>PDF Document</p>
                </div>
            </div>
        );
    }

    if (error || !thumbnail) {
        return (
            <div className='cert-card cert-pdf' onClick={onClick} role="button" tabIndex={0}>
                <div className='cert-pdf-preview'>
                    {getCertificateIcon(cert)}
                    <h3 className='cert-name'>{cert.displayName}</h3>
                    <p className='cert-type'>PDF Document</p>
                </div>
            </div>
        );
    }

    return (
        <div className='cert-card cert-pdf-with-thumbnail' onClick={onClick} role="button" tabIndex={0}>
            <div className='cert-image-container'>
                <img 
                    className="cert-image" 
                    src={thumbnail} 
                    alt={cert.displayName}
                    loading="lazy"
                />
                <div className='cert-overlay cert-pdf-overlay'>
                    <div className='pdf-badge'>
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"/>
                            <path d="M14 2V8H20" stroke="white" strokeWidth="2" fill="none"/>
                        </svg>
                        <span>PDF</span>
                    </div>
                    <h3 className='cert-name'>{cert.displayName}</h3>
                </div>
            </div>
        </div>
    );
};

export default PdfCard;
