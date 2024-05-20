import {Link} from "react-router-dom";
import { dataFetcher } from "../../assets/domain/apiClient";
import { useState, useEffect } from 'react';
import "../../styles/Footer.css";

export const Footer = () => {

    const [providerData, setProviderData] = useState([]);
    const [selectedProvider, setSelectedProvider] = useState(null);
    

    useEffect(() => {
        const fetchProviderData = async () => {
            try {
                const data = await dataFetcher("watch/providers/tv?");
                setProviderData(data?.results);
            } catch (error) {
                console.error('Fehler', error);
            }
        };

        fetchProviderData();
    }, []);


    const handleProviderChange = (event) => {
        const selectedProviderId = event.target.value;
        if (selectedProviderId) {  
            window.location.href = `/provider/${selectedProviderId}`;
        }
    };
    return (
        <div className="footer">
            <div className="company-info">
                <h3>TV Serial Provider</h3>
                <select onChange={handleProviderChange} value={selectedProvider}>
                    <option value="">All Providers</option>
                    {providerData.map(provider => (
                        <option key={provider.provider_id} value={provider.provider_id}>
                            {provider.provider_name}
                        </option>
                    ))}
                </select>
               
            </div>
        </div>
    );
};

