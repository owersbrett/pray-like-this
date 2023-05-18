import React from 'react';
import YouTubeVideoItem from './YoutubeVideoItem';

const HomePage: React.FC = () => {
    return (<>
        <div className='flex flex-col items-center p-8'>
            <h1 className="text-4xl font-bold">The Lord's Prayer</h1>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className='flex flex-col items-center'>
                <h2 className="text-xl font-bold">English</h2>
                <p>Our Father who art in heaven, hallowed be thy name,</p>
                <p>Thy kingdom come, thy will be done</p>
                <p>On Earth as it is in Heaven.</p>
                <p>Give us this day our daily bread,</p>
                <p>And forgive us of our trespasses,</p>
                <p>as we forgive those who trespass against us.</p>
                <p>And lead us not into temptation,</p>
                <p>but deliver us from evil.</p>
                <p>For thine is the kingdom</p>
                <p>the power, and the glory, forever and ever...</p>
                <p>Amen.</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className="text-xl font-bold">Aramaic Transliteration</h2>
                <p>Abwoon d'bwashmaya, nethqadesh shmackh,</p>
                <p>Teytey malkuthakh, neyweh tzevyanach</p>
                <p>Aykanna d'bwashmaya aph bar'ha.</p>
                <p>Habwlan lachma d'sunqanan yaomana,</p>
                <p>Washboglan khaubayn,</p>
                <p>Aykanna daph khnan shbwogan l'khayyabayn.</p>
                <p>Wela tahlan l'nesyuna</p>
                <p>ela patsan min bisha.</p>
                <p>Metol dilakhie malkutha</p>
                <p>wahayla wateshbukhta, l'ahlam almin.</p>
                <p>Ameyn</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className="text-xl font-bold">Aramaic</h2>
                <p>אֵבוּן דּבַשׁמַיאָ נִתקַדְּשׁ שׁמך</p>
                <p>תֵּאתֶא מלכּוּתֶך נִהוֶא צֶכיֶנֵך</p>
                <p>אֵיכֵּנֶּא דבַשׁמִא׃ אָףּ בּארעָא</p>
                <p>הב לן לחמָא דסוּנקֲנַן יֶומֶנֶא</p>
                <p>וֵשׁבוֹק לן חֶובֵּין:</p>
                <p>אֵיכֵּנְּא ͏דּאֵףּ חנַן שׁבֵקַן לחֵיָבֵין</p>
                <p>יֶלֶא טֵּעלן לנִסיוֹנֶא</p>
                <p>אֶלֶא פּצן מן בּישֶׁא</p>
                <p>מטֹּל ͏דִּילֶך הִי מַלכּוּתֶך</p>
                <p>יחַילֶא ותִּשׁבּוֹתֶּא לעֶלם עלמִין</p>
                <p>אָמֵן</p>
            </div>
        </div >
        <div className='flex flex-col items-center p-8'>
            <div className='flex flex-row'>
                <YouTubeVideoItem videoId="uR-5_w5gNYM" />
            </div>
        </div>
    </>
    );
};

export default HomePage;
