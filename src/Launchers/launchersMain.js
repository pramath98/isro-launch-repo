import './launchers.css';
import { useEffect, useState, useMemo,useRef } from 'react';

export default function LaunchersMain() {
const shouldGetData = useRef(true);
    useEffect(() => {
        if(shouldGetData.current){
            shouldGetData.current=false;
            getLaunchersData();

        }
    }, []);



    const getLaunchersData = async () => {
        let launcherURL = 'https://isro.vercel.app/api/launchers';
        // fetch(launcherURL).then(data=> data.json().then(launchers =>{
        //     console.log('launchers:',launchers);
        // }))
        const response = await fetch(launcherURL);
        const launchers = response.json();
        launchers.then(data => {
            const launchersData = data.launchers;
            const slv = launchersData.filter(slvs => slvs.id.includes('SLV'));
            const pslv = slv.filter(pslvs => pslvs.id.includes('PSLV'));
            const gslv = slv.filter(gslvs => gslvs.id.includes('GSLV'));
            const nonSLV = launchersData.filter(slvs => !slvs.id.includes('SLV'));
            console.log('all pslv data', pslv);
            console.log('all gslv data', gslv);
            console.log('all non-slv data', nonSLV);
        });

    }

    return (
        <>
            <div className='Launcher-main-container'>
                Test
            </div>
        </>
    );
}