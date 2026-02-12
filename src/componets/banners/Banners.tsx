"use client"
import Script from 'next/script'
import { useEffect, useState } from 'react'

function Banners() {
    const [largura, setLargura] = useState(0)

    useEffect(() => {
        setLargura(window.innerWidth)

    }, [])

    return (
        <div style={{textAlign:"center",}}>
            {(largura >= 918 && largura <= 2000) &&
                <>
                    <Script
                        src="https://pl28702179.effectivegatecpm.com/ba819ed1298b1a36b9addf5eae788e7e/invoke.js"
                        strategy="afterInteractive"
                        async
                        data-cfasync="false"
                    />
                    <div id="container-ba819ed1298b1a36b9addf5eae788e7e"></div>
                </>
            }
            {
                (largura <= 917 && largura >= 300) &&
                <>
                    <Script id="adsterra-options" strategy="afterInteractive">
                        {`
                        window.atOptions = {
                            key: '5ac8300daf4e0332b965cd4fa8228ccb',
                            format: 'iframe',
                            height: 250,
                            width: 300,
                            params: {}
                        };
                        `}
                    </Script>
                </>
            }
            <script src="https://www.highperformanceformat.com/5ac8300daf4e0332b965cd4fa8228ccb/invoke.js" defer></script>
        </div>
    )
}

export default Banners