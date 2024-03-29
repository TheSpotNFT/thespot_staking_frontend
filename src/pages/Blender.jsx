import React, { useState, useEffect, useRef, useCallback } from 'react';
import Card from '../components/BlenderCards';
import traits from '../traits';
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import Moralis from 'moralis';
import Authenticate from '../components/Authenticate';
import expandAbi from '../ABI/expandAbi.json';
import Mint from '../components/MintBlender';
import '../canvas.css';


export const Blender = () => {
    const { account, isAuthenticated } = useMoralis();
    const userAddress = account
    const unnamedNFTContract = "0x6bdad2a83a8e70f459786a96a0a9159574685c0e";
    const spotNFTContract = '0x0C6945E825fc3c80F0a1eA1d3E24d6854F7460d8';
    const [filter, setFilter] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [image, setImage] = useState();
    //For Text
    const [textinput, setTextinput] = useState('');
    const [xInput, setXInput] = useState('127');
    const [yInput, setYInput] = useState('185');
    const [fontSize, setFontSize] = useState('30');
    const [xInputX3, setXInputX3] = useState('');
    const [yInputX3, setYInputX3] = useState('');
    const [fontSizeX3, setFontSizeX3] = useState('');
    const [font, setFont] = useState('Pixeled');
    const [fontStyle, setFontStyle] = useState('normal');


    const getBackgroundSize = () => {
        return { backgroundSize: `${(xInput * 100) / 500}% 100%` }
    }
    const getBackgroundSize1 = () => {
        return { backgroundSize: `${(yInput * 100) / 500}% 100%` }
    }

    const textinputUser = (event) => {
        setTextinput(event.target.value);
    }

    const userFontSize = (event) => {
        setFontSize(event.target.value);
    }


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    //For Metadata
    const [unnamedBackGround, setUnnamedBackGround] = useState("1");




    {/* For Image retrieval */ }
    const [canvasImage, setCanvasImage] = useState({
        Background: 'Purple',
        Text: '',

    });
    {/* For Traits retrieval */ }
    const [chosenTrait, setChosenTrait] = useState({
        Background: 'Purple',
        Text: '',

    })



    //Set an array of save UnnamedNFT traits which are unburnable and available to all.
    const start = 1;
    const end = 2;
    const branding = [...Array(end - start + 1).keys()].map(x => x + start);

    {/* For retrieval of traits */ }
    const [walletTraits, setWalletTraits] = useState([])
    const [apiLoaded, setApiLoaded] = useState(false)
    const [checkMyTraits, setCheckMyTraits] = useState(false)

    //mainnet chain 0xa86a
    //testnet chain 0xa869
    function getNFTs() {
        const options = { chain: "0xa86a", address: userAddress, token_address: unnamedNFTContract };
        Moralis.Web3API.account.getNFTsForContract(options).then((data) => {
            const result = data.result
            setWalletTraits(result.map(nft => nft.token_id))
            setApiLoaded(true)

        });
        // 0xa869
    }


    useEffect(() => {
        getNFTs();
    }, [account])

    /* useEffect(() => {
         updateTraitMetaData();
     }, [chosenTrait])*/


    function valueX3() {
        setFontSizeX3(fontSize * 2);
        setXInputX3(xInput * 2);
        setYInputX3(yInput * 2);
    }

    async function updateCanvasTraits(trait) {
        setCanvasImage(prevImage => ({ ...prevImage, [trait.traitType]: trait.image }))
        setChosenTrait(prevTrait => ({ ...prevTrait, [trait.traitType]: trait.traitName, [trait.traitType + 'ID']: trait.id }))



    }

    /*function updateTraitMetaData() {
        setUnnamedBackGround(unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[0].value);
        setUnnamedEyes(unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[1].value);
        setUnnamedMouth(unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[2].value);
        setUnnamedHat(unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[3].value);
        setUnnamedSkin(unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[4].value);
        setUnnamedNose(unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[5].value);
        setUnnamedSpecial(unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[6].value);
        setUnnamedLines(unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[7].value);
        setUnnamedBrand(chosenBrand.Branding);
        setUnnamedID(chosenTrait.UnnamedNFTID)
    }*/




    function createCard(trait) { //Building the card here from Card.jsx passing props and simultaneously fetching traits on click.
        return (

            <div key={trait.edition} onClick={() => {
                updateCanvasTraits(trait)

            }}> <Card
                    nftName={trait.nftName}
                    traitType={trait.traitType}
                    traitName={trait.traitName}
                    image={trait.image}
                    name={textinput}
                    id={trait.id}



                /></div>
        )
    }

    /* For Searching traits
    const searchText = (event) => {
        setFilter(event.target.value);
    }
    */

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
            ctx.font = `${fontStyle} ${fontSize}px Pixeled`;
            ctx.fillText(textinput, xInput, yInput);
        }

        const imgHidden = new Image();
        imgHidden.src = layer
        imgHidden.onload = () => {
            const ctxHidden = hiddenCanvas.current.getContext("2d")
            ctxHidden.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);
            ctxHidden.drawImage(imgHidden, 0, 0, 900, 900);
            ctxHidden.font = `${fontStyle} ${fontSizeX3}px Pixeled`;
            ctxHidden.fillText(textinput, xInputX3, yInputX3);
        }



    }




    useEffect(() => {
        valueX3();
        drawImage(canvasImage.Background);
        drawImage(canvasImage.Bubble);
        drawImage(canvasImage.Letter);


    }

        , [canvasImage, canvas, windowWidth, windowHeight, textinput, xInput, yInput, fontSize, userFontSize, font])


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


    //convert string to array



    // Add feature: Filter owned trait cards
    const [ownedCards, setOwnedCards] = useState(true)
    //---------------------------------//

    //filtering

    var letterarray = textinput.split('');

    console.log(letterarray[0]);
    console.log(letterarray[1]);
    console.log(letterarray[2]);
    console.log(letterarray[3]);
    console.log(letterarray[4]);
    console.log(letterarray[5]);
    console.log(letterarray[6]);
    console.log(letterarray[7]);
    console.log(letterarray[8]);
    console.log(letterarray.length)

    if (!isAuthenticated) {
        return (
            <Authenticate />
        );
    } else
        // Main Component Return
        return (
            <div className='container flex-auto mx-auto w-full'>

                {/* Canvas Row*/}
                <div className="lg:sticky top-20 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-1 ml-6 sm:p-5 bg-slate-900 lg:pb-3">
                    {/* canvas div */}

                    <div className="p-1 mb-10 sm:mb-10" ref={div} style={{ height: "32rem", width: "450px" }}>
                        <canvas
                            ref={canvas}
                            width='450px'
                            height='450px'
                            className='mt-1 border-1 border-4 border-slate-500 text-center content-center p-5'
                        />
                        <div className="text-center md: pl-10"><h1 className='font-mono text-lg text-yellow-400 pt-1'>Blender</h1></div>
                        <canvas
                            ref={hiddenCanvas}
                            width='900px'
                            height='900px'
                            className='hidden' />
                    </div>
                    {/* canvas div ends */}
                    {/* Stats div*/}
                    <div className='grow border-dashed border-4 border-slate-500 p-3 pl-5 m-1 text-left col-span-1 w-80 md:mt-10 lg:mt-2 mt-10 sm:mt-10 text-sm' style={{ height: "24rem", width: "24rem" }}>
                        {/* Individual Stats */}
                        <div className='font-mono text-white list-none flex'>
                            <div className={'pl-2 pb-4 text-spot-yellow'}>Blended </div>

                        </div>

                        <div className="text-spot-yellow flex pl-2">BackGround: <div className='text-white flex px-2'>{chosenTrait.nftName}</div></div>

                        {/* End of Indiv Stats */}
                        {/* Buttons */}
                        <div className='font-mono text-white list-none flex pb-3 pl-2'>
                            <div className='text-spot-yellow pr-2'>Spot: </div>
                            {textinput}
                        </div>
                        <div className='font-mono text-white list-none flex pb-3 pl-2'>
                            You must own the expanded letter nft to use it in your spot
                        </div>
                        <div className='font-mono text-white list-none flex pb-3 pl-2'>
                            <div className={`text-${(letterarray.length === 9) ? "spot-yellow" : "[red]"} text-spot-yellow pr-2`}>Length: </div>
                            {letterarray.length}
                        </div>
                        <div className='font-mono text-white list-none flex pb-3 pl-2'>
                            * Length must = 9 (add spaces to the end)
                        </div>



                        <div className="pt-1 pb-1 pr-2 pl-1 flex">


                            <Mint
                                chosenTrait={chosenTrait}
                                walletTraits={walletTraits}
                                background={chosenTrait.UnnamedNFTID} //placeholder
                                letter1={letterarray[0]}
                                letter2={letterarray[1]}
                                letter3={letterarray[2]}
                                letter4={letterarray[3]}
                                letter5={letterarray[4]}
                                letter6={letterarray[5]}
                                name={textinput}
                                saveImage={saveImage}
                                userAddress={userAddress}
                                canvas={chosenTrait}
                                savedImage={savedImage}
                            // branding={branding}
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

                        <div className='font-mono text-white list-none flex text-sm pl-2 py-2'>
                            You must approve your expansions to be burnt before minting

                        </div>
                        <div className="flex pr-2 pl-2 pt-2"> <button className="w-full rounded-lg px-1 py-1 border-2 border-gray-200 text-gray-200
    hover:bg-gray-200 hover:text-gray-900 duration-300 font-mono font-bold text-base" onClick={() => {
                                setOwnedCards(!ownedCards)
                            }}>{!ownedCards ? 'My Expanded NFTs' : 'View All Expanded NFTs'}</button></div>
                        {/*<div className='font-mono text-white list-none flex pb-3 text-sm'><span className={traitsAvailability === '0' ? "text-green-300" : "text-[#fa2121]"}>
                            {traitsAvailability === '0' && currentDNA.length >= 14 ? 'Trait Combo is Unique!' : null}
                            {traitsAvailability === '1' && currentDNA.length >= 14 ? "Trait Combo's Been Minted!" : null}</span>
                        </div>*/} {/* End of btm text lines */}
                    </div>{/* Stats div Ends*/}
                    {/* SearchBox */}
                    {/*}<div className="gap-4 pt-4 pl-2">



                           <div className='col-span-1'><input type="text"
                            className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2" placeholder="search trait/ID..."
                            value={filter}
                            onChange={searchText.bind(this)}
                        /></div>
                    


                    </div>*/}{/* SearchBox Ends */}


                    <div className="pt-4 pl-4 pb-4 pr-4">
                        <div className="flex">
                            <div className='col-span-2 text-white pr-5'>Name: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-24" placeholder="Spot"
                                value={textinput}
                                onChange={textinputUser.bind(this)}
                            /></div>

                            <div className='col-span-2 text-white px-2'>X: </div><div class="slideContainer"><div className="pt-1"><input type="range" min={0} max={500} id="slider" class="slider" value={xInput} onChange={(e) => setXInput(e.target.valueAsNumber)} style={getBackgroundSize()} /></div></div>

                            <div className='col-span-1 text-white px-2'>Y: </div><div className="pt-1 slideContainer"><input type="range" min={0} max={500} id="slider" class="slider" value={yInput} onChange={(e) => setYInput(e.target.valueAsNumber)} style={getBackgroundSize1()} /></div>

                            <div className='col-span-1 text-white px-2'>Font Size: </div><div><input type="text"
                                className="border-2 border-slate-600 bg-slate-400 text-left font-mono placeholder-slate-600 pl-2 w-12" placeholder="Font size"
                                value={fontSize}
                                onChange={userFontSize.bind(this)}
                            /></div></div></div>

                </div>{/* Canvas Row Div Ends*/}
                <div className='overflow-y-auto'>
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-5 font-mono text-spot-yellow">
                        {ownedCards ? ownedFilter.map(createCard) : dataSearch.map(createCard)}
                    </div></div>
                <div>
                    {showButton && (
                        <button onClick={scrollToTop} className="back-to-top">
                            &#94;
                        </button>
                    )}
                </div>
                {/*} <div className="text-white">BackGround: {unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[0].value}</div>
                <div className="text-white">Eyes: {unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[1].value}</div>
                <div className="text-white">Mouth: {unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[2].value}</div>
                <div className="text-white">Hat: {unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[3].value}</div>
                <div className="text-white">Skin: {unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[4].value}</div>
                <div className="text-white">Nose: {unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[5].value}</div>
                <div className="text-white">Special: {unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[6].value}</div>
                <div className="text-white">Lines: {unnamedData[`${(chosenTrait.UnnamedNFTID - 1)}`].attributes[7].value}</div>

                            */}
            </div>

        )

}

export default Blender;
/*


let ownedFilter = traits.filter(item => {

        if (walletTraits.includes(item.id.toString()) || branding.includes(item.id)) {

            return item
        }

    })
    */