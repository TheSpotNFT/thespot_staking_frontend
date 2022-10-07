import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from '../components/BiznessCards';
import traits from '../biznesscards';
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import Moralis from 'moralis';
import Authenticate from '../pages/authenicate';
import PrintCard from '../components/MintBizCard';
import biznessMetadata from '../biznessMetadata';
import '../canvas.css';

export const Bizness = () => {
    const { account, isAuthenticated } = useMoralis();
    const userAddress = account
    const biznessContract = "0x11C49B8d2F8C92598Fe0bea8fCb9f1B3f045A723";


    //sliders

    const getBackgroundSize = () => {
        return { backgroundSize: `${(xInput * 100) / 500}% 100%` }
    }
    const getBackgroundSize1 = () => {
        return { backgroundSize: `${(yInput * 100) / 500}% 100%` }
    }
    const getBackgroundSize2 = () => {
        return { backgroundSize: `${(xInputText * 100) / 500}% 100%` }
    }
    const getBackgroundSize3 = () => {
        return { backgroundSize: `${(yInputText * 100) / 500}% 100%` }
    }
    const getBackgroundSize4 = () => {
        return { backgroundSize: `${(xProject * 100) / 500}% 100%` }
    }
    const getBackgroundSize5 = () => {
        return { backgroundSize: `${(yProject * 100) / 500}% 100%` }
    }
    const getBackgroundSize6 = () => {
        return { backgroundSize: `${(xWallet * 100) / 500}% 100%` }
    }
    const getBackgroundSize7 = () => {
        return { backgroundSize: `${(yWallet * 100) / 500}% 100%` }
    }
    const getBackgroundSize8 = () => {
        return { backgroundSize: `${(xDomain * 100) / 500}% 100%` }
    }
    const getBackgroundSize9 = () => {
        return { backgroundSize: `${(yDomain * 100) / 500}% 100%` }
    }
    const getBackgroundSize10 = () => {
        return { backgroundSize: `${(xDiscord * 100) / 500}% 100%` }
    }
    const getBackgroundSize11 = () => {
        return { backgroundSize: `${(yDiscord * 100) / 500}% 100%` }
    }
    const getBackgroundSize12 = () => {
        return { backgroundSize: `${(xTwitter * 100) / 500}% 100%` }
    }
    const getBackgroundSize13 = () => {
        return { backgroundSize: `${(yTwitter * 100) / 500}% 100%` }
    }


    const [filter, setFilter] = useState('');

    const [textinput, setTextinput] = useState('Name');
    const [xInput, setXInput] = useState('175');
    const [yInput, setYInput] = useState('120');
    const [fontSize, setFontSize] = useState('30');
    const [font, setFont] = useState('');
    const [fontStyle, setFontStyle] = useState('normal');
    const biznessNFTMetadata = biznessMetadata;


    const textinputUser = (event) => {
        setTextinput(event.target.value);
    }
    /*const userXInput = (event) => {
        setXInput(event.target.value);
    }*/
    const userYInput = (event) => {
        setYInput(event.target.value);
    }
    const userFontSize = (event) => {
        setFontSize(event.target.value);
    }


    const handleChange = selectedOption => {
        console.log('handleChange', selectedOption.value);
        setFont(selectedOption.value);
    };

    const handleChangeStyle = selectedOption => {
        console.log('handleChange', selectedOption.value);
        setFontStyle(selectedOption.value);
    };


    const [textinputText, setTextinputText] = useState('Title');
    const [xInputText, setXInputText] = useState('195');
    const [yInputText, setYInputText] = useState('145');
    const [fontSizeText, setFontSizeText] = useState('15');
    const [fontText, setFontText] = useState('Arial');
    const [fontStyleText, setFontStyleText] = useState('normal');


    const textinputUserText = (event) => {
        setTextinputText(event.target.value);
    }
    const userXInputText = (event) => {
        setXInputText(event.target.value);
    }
    const userYInputText = (event) => {
        setYInputText(event.target.value);
    }
    const userFontSizeText = (event) => {
        setFontSizeText(event.target.value);
    }


    const [projectinput, setProjectinput] = useState('Project');
    const [xProject, setXProject] = useState('350');
    const [yProject, setYProject] = useState('30');
    const [fontProjectSize, setFontProjectSize] = useState('15');
    const [fontProject, setFontProject] = useState('Arial');
    const [fontStyleProject, setFontStyleProject] = useState('normal');

    const userSetProjectInput = (event) => {
        setProjectinput(event.target.value);
    }
    const userSetXProject = (event) => {
        setXProject(event.target.value);
    }
    const userSetYProject = (event) => {
        setYProject(event.target.value);
    }
    const userFontProjectSize = (event) => {
        setFontProjectSize(event.target.value);
    }

    const [walletinput, setWalletinput] = useState('Wallet');
    const [xWallet, setXWallet] = useState('30');
    const [yWallet, setYWallet] = useState('30');
    const [fontWalletSize, setWalletFontSize] = useState('15');
    const [fontWallet, setFontWallet] = useState('Arial');
    const [fontStyleWallet, setFontStyleWallet] = useState('normal');

    const userSetWalletInput = (event) => {
        setWalletinput(event.target.value);
    }
    const userSetXWallet = (event) => {
        setXWallet(event.target.value);
    }
    const userSetYWallet = (event) => {
        setYWallet(event.target.value);
    }
    const userSetWalletFontSize = (event) => {
        setWalletFontSize(event.target.value);
    }

    const [domainInput, setDomainInput] = useState('Domain');
    const [xDomain, setXDomain] = useState('350');
    const [yDomain, setYDomain] = useState('205');
    const [fontDomainSize, setFontDomainSize] = useState('15');
    const [fontDomain, setFontDomain] = useState('Arial');
    const [fontStyleDomain, setFontStyleDomain] = useState('normal');

    const userSetDomainInput = (event) => {
        setDomainInput(event.target.value);
    }
    const userSetXDomain = (event) => {
        setXDomain(event.target.value);
    }
    const userSetYDomain = (event) => {
        setYDomain(event.target.value);
    }
    const userFontDomainSize = (event) => {
        setFontDomainSize(event.target.value);
    }


    const [discordInput, setDiscordInput] = useState('Discord');
    const [xDiscord, setXDiscord] = useState('45');
    const [yDiscord, setYDiscord] = useState('203');
    const [fontDiscordSize, setFontDiscordSize] = useState('15');
    const [fontDiscord, setFontDiscord] = useState('Arial');
    const [fontStyleDiscord, setFontStyleDiscord] = useState('normal');

    const userSetDiscordInput = (event) => {
        setDiscordInput(event.target.value);
    }
    const userSetXDiscord = (event) => {
        setXDiscord(event.target.value);
    }
    const userSetYDiscord = (event) => {
        setYDiscord(event.target.value);
    }
    const userFontDiscordSize = (event) => {
        setFontDiscordSize(event.target.value);
    }

    const [textTwitter, setTextTwitter] = useState('Twitter');
    const [xTwitter, setXTwitter] = useState('45');
    const [yTwitter, setYTwitter] = useState('177');
    const [fontTwitterSize, setFontTwitterSize] = useState('15');
    const [fontTwitter, setFontTwitter] = useState('Arial');
    const [fontStyleTwitter, setFontStyleTwitter] = useState('normal');

    const userSetTwitterInput = (event) => {
        setTextTwitter(event.target.value);
    }
    const userSetXTwitter = (event) => {
        setXTwitter(event.target.value);
    }
    const userSetYTwitter = (event) => {
        setYTwitter(event.target.value);
    }
    const userFontTwitterSize = (event) => {
        setFontTwitterSize(event.target.value);
    }


    const handleChangeText = selectedOption => {
        console.log('handleChange', selectedOption.value);
        setFontText(selectedOption.value);
    };

    const handleChangeStyleText = selectedOption => {
        console.log('handleChange', selectedOption.value);
        setFontStyleText(selectedOption.value);
    };

    {/* For Image retrieval */ }
    const [canvasImage, setCanvasImage] = useState({
        Background: '',
        Text: '',
    });
    {/* For Traits retrieval */ }
    const [chosenTrait, setChosenTrait] = useState({
        Background: '1',
        BackgroundID: '1',
        Eyes: '',
        Mouth: '',
        Hat: '',
        Skin: '',
        Nose: '',
        Special: '',
        Lines: '',
        Branding: 'None',
        BrandingID: '9999'
    })


    //Set an array of save UnnamedNFT traits which are unburnable and available to all.
    const start = 3001;
    const end = 3004;
    const branding = [...Array(end - start + 1).keys()].map(x => x + start);

    {/* For retrieval of traits */ }
    const [walletTraits, setWalletTraits] = useState([])
    const [apiLoaded, setApiLoaded] = useState(false)
    const [checkMyTraits, setCheckMyTraits] = useState(false)


    function getTraits() {
        const options = { chain: "0xa86a", address: userAddress, token_address: biznessContract };
        Moralis.Web3API.account.getNFTsForContract(options).then((data) => {
            const result = data.result
            setWalletTraits(result.map(nft => nft.token_id))
            setApiLoaded(true)

        });

    }


    useEffect(() => {
        getTraits();
    }, [account])

    useEffect(() => {
        updateFont();
    }, [chosenTrait]
    )
    console.log(font);


    function updateFont() {
        setFont(biznessNFTMetadata[`${(chosenTrait.BackgroundID - 1)}`].attributes[3].value)
    }

    function updateText() {
        drawImage(canvasImage.TombStone);
    }

    function updateCanvasTraits(trait) {

        setCanvasImage(prevImage => ({ ...prevImage, [trait.traitType]: trait.image }))
        setChosenTrait(prevTrait => ({ ...prevTrait, [trait.traitType]: trait.traitName, [trait.traitType + 'ID']: trait.id }))


    }

    function createCard(trait) { //Building the card here from Card.jsx passing props and simultaneously fetching traits on click.
        return (

            <div key={trait.edition} onClick={() => {

                updateCanvasTraits(trait);

            }}> <Card
                    nftName={trait.nftName}
                    traitType={trait.traitType}
                    traitName={trait.traitName}
                    image={trait.image}
                    id={trait.id}
                /></div>
        )
    }

    // For Searching traits
    const searchText = (event) => {
        setFilter(event.target.value);
    }


    let dataSearch = traits.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
    let ownedFilter = traits.filter(item => {

        if (walletTraits.includes(item.id.toString()) || branding.includes(item.id)) {

            return item
        }

    })

    // Putting stuff on Canvas
    const canvas = useRef(null)
    const hiddenCanvas = useRef(null)
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const { windowWidth } = useState(window.innerWidth)
    const { windowHeight } = useState(window.innerHeight)

    const div = useCallback(node => {

        if (node !== null) {

            setHeight(node.getBoundingClientRect().height); //set height and width of canvas relative to parent div.
            setWidth(node.getBoundingClientRect().width);
        }
    }, [windowWidth, windowHeight]);

    function drawImage(layer) {
        const img = new Image();
        //img.setAttribute('crossOrigin', '*');
        img.src = layer
        img.onload = () => {
            const ctx = canvas.current.getContext("2d")
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, 450, 450);

            ctx.font = `${fontStyle} ${fontSize}px ${font}`;
            ctx.fillText(textinput, xInput, yInput);

            ctx.font = `${fontStyleText} ${fontSizeText}px ${font}`;
            ctx.fillText(textinputText, xInputText, yInputText, 100);

            ctx.font = `${fontStyleProject} ${fontStyleProject}px ${font}`;
            ctx.fillText(projectinput, xProject, yProject, 100);

            ctx.font = `${fontStyleWallet} ${fontWalletSize}px ${font}`;
            ctx.fillText(walletinput, xWallet, yWallet, 100);

            ctx.font = `${fontStyleDomain} ${fontDomainSize}px ${font}`;
            ctx.fillText(domainInput, xDomain, yDomain, 100);

            ctx.font = `${fontStyleDiscord} ${fontDiscordSize}px ${font}`;
            ctx.fillText(discordInput, xDiscord, yDiscord, 100);

            ctx.font = `${fontStyleTwitter} ${fontTwitterSize}px ${font}`;
            ctx.fillText(textTwitter, xTwitter, yTwitter, 100);
        }

        const imgHidden = new Image();
        imgHidden.src = layer
        imgHidden.onload = () => {
            const ctxHidden = hiddenCanvas.current.getContext("2d")
            ctxHidden.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);
            ctxHidden.drawImage(imgHidden, 0, 0, 450, 450);

            ctxHidden.font = `${fontStyle} ${fontSize}px ${font}`;
            ctxHidden.fillText(textinput, xInput, yInput);

            ctxHidden.font = `${fontStyleText} ${fontSizeText}px ${font}`;
            ctxHidden.fillText(textinputText, xInputText, yInputText, 100);

            ctxHidden.font = `${fontStyleProject} ${fontStyleProject}px ${font}`;
            ctxHidden.fillText(projectinput, xProject, yProject, 100);

            ctxHidden.font = `${fontStyleWallet} ${fontWalletSize}px ${font}`;
            ctxHidden.fillText(walletinput, xWallet, yWallet, 100);

            ctxHidden.font = `${fontStyleDomain} ${fontDomainSize}px ${font}`;
            ctxHidden.fillText(domainInput, xDomain, yDomain, 100);

            ctxHidden.font = `${fontStyleDiscord} ${fontDiscordSize}px ${font}`;
            ctxHidden.fillText(discordInput, xDiscord, yDiscord, 100);

            ctxHidden.font = `${fontStyleTwitter} ${fontTwitterSize}px ${font}`;
            ctxHidden.fillText(textTwitter, xTwitter, yTwitter, 100);
        }

    }




    useEffect(() => {
        setFont(biznessNFTMetadata[`${(chosenTrait.BackgroundID - 1)}`].attributes[3].value)
        drawImage(canvasImage.Background);
        drawImage(canvasImage.Text);


    }
        , [canvasImage, canvas, windowWidth, windowHeight, font, fontSize, fontSizeText, fontDomainSize, fontDiscordSize, fontProjectSize, fontTwitterSize, fontWalletSize, textinput, textinputText, projectinput, walletinput, domainInput, discordInput, textTwitter, xInput, yInput, xInputText, yInputText, xProject, yProject, xWallet, yWallet, xDomain, yDomain, xDiscord, yDiscord, xTwitter, yTwitter])
    const [savedImage, setSavedImage] = useState('empty image') //Saving image for sending to IPFS. This part isn't active yet!
    function saveImage() {
        const result = (new Promise((resolve, reject) => {
            const imageToSave = new Image();
            imageToSave.src = hiddenCanvas.current.toDataURL('image/png', 1.0);
            imageToSave.onload = function () {
                resolve(this.src);
            };
        }));

        return result;
    }



    // Add feature: Filter owned trait cards
    const [ownedCards, setOwnedCards] = useState(false)
    //---------------------------------//

    //filtering


    if (!isAuthenticated) {
        return (
            <Authenticate />
        );
    } else
        // Main Component Return
        return (
            <div className='flex-auto mx-auto w-full'>

                {/* Canvas Row*/}
                <div className="lg:sticky top-20 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-1 ml-6 bg-slate-900 lg:pb-3 pl-2">
                    {/* canvas div */}

                    <div className="p-1 mb-20 pt-8" ref={div} style={{ height: "450px", width: "450px" }}>
                        <canvas
                            ref={canvas}
                            width={width}
                            height={height}
                            className='mt-1 border-1 border-4 border-slate-500 text-center content-center p-5'
                        />
                        <div className="text-center md:pl-10"><h1 className='font-mono text-lg text-yellow-400 pt-1'>Printer</h1></div>
                        <canvas
                            ref={hiddenCanvas}
                            width='450px'
                            height='450px'
                            className='hidden' />
                    </div>
                    {/* canvas div ends */}
                    {/* Stats div*/}
                    <div className='grow border-dashed border-4 border-slate-500 grid grid-cols-2 p-3 pl-5 m-1 text-left col-span-1 w-80 lg:mt-9 mt-10 text-sm' style={{ height: "18rem", width: "25rem" }}>
                        {/* Individual Stats */}
                        <div className='font-mono text-white list-none flex pb-3'>
                            <div className={`text-${(walletTraits.includes(`${chosenTrait.BackgroundID}`)) ? "spot-yellow" : "[red]"} font-bold pr-3`}>BizCard: </div>
                            {chosenTrait.BackgroundID}
                        </div>


                        <div className='font-mono text-white list-none flex pb-3'>
                            <div className='text-spot-yellow pr-2'>Name: </div>
                            {textinput}
                        </div>
                        <div className='font-mono text-white list-none flex pb-3'>
                            <div className='text-spot-yellow pr-2'>Colour: </div>
                            Bone
                        </div>
                        <div className='font-mono text-white list-none flex pb-3'>
                            <div className='text-spot-yellow pr-2'>Texture: </div>
                            None
                        </div>
                        <div className='font-mono text-white list-none flex pb-3'>
                            <div className='text-spot-yellow pr-2'>Extras: </div>
                            Letterpress
                        </div>
                        <div className='font-mono text-white list-none flex pb-3'>
                            <div className='text-spot-yellow pr-2'>Font: </div>
                            {font}
                        </div>
                        {/* End of Indiv Stats */}
                        {/* Buttons */}
                        <div className="pt-1 pb-1 pl-1 flex w-full">

                            <PrintCard
                                chosenTrait={chosenTrait}
                                walletTraits={walletTraits}
                                saveImage={saveImage}
                                userAddress={userAddress}
                                canvas={chosenTrait}
                                savedImage={savedImage}
                                background={chosenTrait.Background}
                                name={textinput}
                                title={textinputText}
                                project={projectinput}
                                wallet={walletinput}
                                domain={domainInput}
                                discord={discordInput}
                                twitter={textTwitter}

                            // traitsAvailability={traitsAvailability}
                            />


                        </div>
                        {/* End of Buttons */}
                        {/* Two bottom text lines */}

                        {/*check this*/}

                        {/*  <div className='font-mono text-white list-none flex pb-0 pt-3 text-sm'>
                            <div className='text-spot-yellow font-bold pr-3 text-xl'>* </div>
                            Traits in your wallet:  {apiLoaded, checkMyTraits && walletTraits.length + ' nos.'} {apiLoaded, checkMyTraits && 'IDs: ' + walletTraits.map(trait => ' ' + trait)}
                        </div>*/}
                        <div className='font-mono text-white list-none flex pb-3 text-sm'>
                            <div className='text-[red] pr-3 text-xl'>* </div>
                            BizCard not in your wallet.
                        </div>
                        <div className="flex"> <button className="w-full m-2 rounded-lg px-4 py-2 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={() => {
                                setOwnedCards(!ownedCards)
                            }}>{!ownedCards ? 'My BizCards' : 'View All BizCards'}</button></div>



                        {/*<div className='font-mono text-white list-none flex pb-3 text-sm'><span className={traitsAvailability === '0' ? "text-green-300" : "text-[#fa2121]"}>
                            {traitsAvailability === '0' && currentDNA.length >= 14 ? 'Trait Combo is Unique!' : null}
                            {traitsAvailability === '1' && currentDNA.length >= 14 ? "Trait Combo's Been Minted!" : null}</span>
                        </div>*/} {/* End of btm text lines */}
                    </div>{/* Stats div Ends*/}
                    {/* SearchBox */}
                    <div className="pt-4 pl-2">
                        <div className="flex">
                            <div className='col-span-2 text-white pr-5'>Name: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-24" placeholder="Name"
                                value={textinput}
                                onChange={textinputUser.bind(this)}
                            /></div>

                            <div className='col-span-2 text-white px-2'>X: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={xInput} onChange={(e) => setXInput(e.target.valueAsNumber)} style={getBackgroundSize()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Y: </div><div className="pt-1 slideContainer"><input type="range" min={0} max={500} id="slider" class="slider" value={yInput} onChange={(e) => setYInput(e.target.valueAsNumber)} style={getBackgroundSize1()} /></div>

                            <div className='col-span-1 text-white px-2'>Font Size: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-12" placeholder="Font size"
                                value={fontSize}
                                onChange={userFontSize.bind(this)}
                            /></div></div>



                        {/*}   <div className='col-span-1'><input type="text"
                            className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2" placeholder="search trait/ID..."
                            value={filter}
                            onChange={searchText.bind(this)}
                        /></div>
                    */}

                    </div>{/* SearchBox Ends */}

                    <div className="gap-4 pt-4 md:pt-0 sm:pt-0 pl-2">
                        <div className="flex">
                            <div className='col-span-2 text-white pr-8'>Title: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-24" placeholder="Title"
                                value={textinputText}
                                onChange={textinputUserText.bind(this)}
                            /></div>

                            <div className='col-span-2 text-white px-2'>X: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={xInputText} onChange={(e) => setXInputText(e.target.valueAsNumber)} style={getBackgroundSize2()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Y: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={yInputText} onChange={(e) => setYInputText(e.target.valueAsNumber)} style={getBackgroundSize3()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Font Size: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-12" placeholder="Font size"
                                value={fontSizeText}
                                onChange={userFontSizeText.bind(this)}
                            /></div></div>

                    </div>

                    <div className="gap-4 pl-2">
                        <div className="flex">
                            <div className='col-span-2 text-white pr-3.5'>Project: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-24" placeholder="Project"
                                value={projectinput}
                                onChange={userSetProjectInput.bind(this)}
                            /></div>

                            <div className='col-span-2 text-white px-2'>X: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={xProject} onChange={(e) => setXProject(e.target.valueAsNumber)} style={getBackgroundSize4()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Y: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={yProject} onChange={(e) => setYProject(e.target.valueAsNumber)} style={getBackgroundSize5()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Font Size: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-12" placeholder="Font size"
                                value={fontProjectSize}
                                onChange={userFontProjectSize.bind(this)}
                            /></div></div>

                    </div>


                    <div className="gap-4 pl-2">
                        <div className="flex">
                            <div className='col-span-2 text-white pr-5'>Wallet: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-24" placeholder="Wallet"
                                value={walletinput}
                                onChange={userSetWalletInput.bind(this)}
                            /></div>

                            <div className='col-span-2 text-white px-2'>X: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={xWallet} onChange={(e) => setXWallet(e.target.valueAsNumber)} style={getBackgroundSize6()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Y: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={yWallet} onChange={(e) => setYWallet(e.target.valueAsNumber)} style={getBackgroundSize7()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Font Size: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-12" placeholder="Font size"
                                value={fontWalletSize}
                                onChange={userSetWalletFontSize.bind(this)}
                            /></div></div>

                    </div>


                    <div className="gap-4 pl-2">
                        <div className="flex">
                            <div className='col-span-2 text-white pr-2'>Domain: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-24" placeholder="Domain"
                                value={domainInput}
                                onChange={userSetDomainInput.bind(this)}
                            /></div>

                            <div className='col-span-2 text-white px-2'>X: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={xDomain} onChange={(e) => setXDomain(e.target.valueAsNumber)} style={getBackgroundSize8()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Y: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={yDomain} onChange={(e) => setYDomain(e.target.valueAsNumber)} style={getBackgroundSize9()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Font Size: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-12" placeholder="Font size"
                                value={fontDomainSize}
                                onChange={userFontDomainSize.bind(this)}
                            /></div></div>

                    </div>


                    <div className="gap-4 pl-2">
                        <div className="flex">
                            <div className='col-span-2 text-white pr-3'>Discord: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-24" placeholder="Discord"
                                value={discordInput}
                                onChange={userSetDiscordInput.bind(this)}
                            /></div>

                            <div className='col-span-2 text-white px-2'>X: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={xDiscord} onChange={(e) => setXDiscord(e.target.valueAsNumber)} style={getBackgroundSize10()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Y: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={yDiscord} onChange={(e) => setYDiscord(e.target.valueAsNumber)} style={getBackgroundSize11()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Font Size: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-12" placeholder="Font size"
                                value={fontDiscordSize}
                                onChange={userFontDiscordSize.bind(this)}
                            /></div></div>

                    </div>


                    <div className="gap-4 pl-2 pb-2">
                        <div className="flex">
                            <div className='col-span-2 text-white pr-4'>Twitter: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-24" placeholder="Twitter"
                                value={textTwitter}
                                onChange={userSetTwitterInput.bind(this)}
                            /></div>

                            <div className='col-span-2 text-white px-2'>X: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={xTwitter} onChange={(e) => setXTwitter(e.target.valueAsNumber)} style={getBackgroundSize12()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Y: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={yTwitter} onChange={(e) => setYTwitter(e.target.valueAsNumber)} style={getBackgroundSize13()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Font Size: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-12" placeholder="Font size"
                                value={fontTwitterSize}
                                onChange={userFontTwitterSize.bind(this)}

                            /> </div></div>

                    </div>


                </div>

                {/* Canvas Row Div Ends*/}


                <div className='overflow-y-auto'>
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-5 font-mono text-spot-yellow">
                        {ownedCards ? ownedFilter.map(createCard) : dataSearch.map(createCard)}
                    </div></div></div>

        )

}

export default Bizness;
/*


let ownedFilter = traits.filter(item => {

        if (walletTraits.includes(item.id.toString()) || branding.includes(item.id)) {

            return item
        }

    })
    */
