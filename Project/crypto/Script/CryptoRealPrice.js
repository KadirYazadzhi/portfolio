document.addEventListener('DOMContentLoaded', function () {
    function getCryptoPrices() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,bittensor,ethereum,litecoin,ripple,binancecoin,tether,cardano,helium,solana,the-graph,xrp,shiba-inu,matic-network,blockstack,tron,dogecoin,kusama,usd-coin,chainlink,bitcoin-cash,uniswap,gala,immutable-x,sushi,render-token,apecoin,internet-computer,polkadot,avalanche-2&vs_currencies=usd')
            .then(response => response.json())
            .then(data => displayCryptoPrices(data))
            .catch(error => console.error('Error fetching crypto prices:', error));
    }

    function displayCryptoPrices(prices) {
        const bitcoinPrice = prices['bitcoin']['usd'];
        const ethereumPrice = prices['ethereum']['usd'];
        const tetherPrice = prices['tether']['usd'];
        const BNBPrice = prices['binancecoin']['usd'];
        const solanaPrice = prices['solana']['usd'];
        const XRPPrice = prices['ripple']['usd'];
        const cardanoPrice = prices['cardano']['usd'];
        const AvalanchePrice = prices['avalanche-2']['usd'];
        const SHIBPrice = prices['shiba-inu']['usd'];
        const DOGEPrice = prices['dogecoin']['usd'];
        const TRONPrice = prices['tron']['usd'];
        const PolygonPrice = prices['matic-network']['usd'];
        const USDCPrice = prices['usd-coin']['usd'];
        const BTCCASHPrice = prices['bitcoin-cash']['usd'];
        const chainlinkPrice = prices['chainlink']['usd'];
        const UniswapPrice = prices['uniswap']['usd'];
        const litecoinPrice = prices['litecoin']['usd'];
        const ICPprice = prices['internet-computer']['usd'];
        const IMXPrice = prices['immutable-x']['usd'];
        const GALAPrice = prices['gala']['usd'];
        const APEPrice = prices['apecoin']['usd'];
        const SHUSHIPrice = prices['sushi']['usd'];
        const StacksPrice = prices['blockstack']['usd'];
        const STXPrice = prices['polkadot']['usd'];
        const KusamaPrice = prices['kusama']['usd'];
        const HeliumPrice = prices['helium']['usd'];
        const GraphPrice = prices['the-graph']['usd'];
        const RenderPrice = prices['render-token']['usd'];
        const PriceBittensor = prices['bittensor']['usd'];


        const priceBitcoin = document.getElementById('priceBitcoin');
        const priceBitcoinNow = document.getElementById('priceBitcoinNew');
        const btcPrice = document.getElementById('btcPrice');
        var usFormatBitcoin = bitcoinPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceBitcoin.innerHTML = 'USD ' + usFormatBitcoin;
        priceBitcoinNow.innerHTML = usFormatBitcoin;
        btcPrice.innerHTML = usFormatBitcoin;


        const priceEthereum = document.getElementById('priceEthereum');
        const priceEthereumNow = document.getElementById('priceEthereumNew');
        const ethPrice = document.getElementById('ethPrice');
        var usFormatEthereum = ethereumPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceEthereum.innerHTML = 'USD ' + usFormatEthereum;
        priceEthereumNow.innerHTML = usFormatEthereum;
        ethPrice.innerHTML = usFormatEthereum;


        const priceTether = document.getElementById('priceTether');
        const priceTetherNow = document.getElementById('priceTetherNew');
        const tetPrice = document.getElementById('tetPrice');
        var usFormatTether = tetherPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceTether.innerHTML = 'USD ' + usFormatTether;
        priceTetherNow.innerHTML = usFormatTether;
        tetPrice.innerHTML = usFormatTether;


        const priceBNB = document.getElementById('priceBNB');
        const priceBNBNow = document.getElementById('priceBNBNew');
        const bnPrice = document.getElementById('bnPrice');
        var usFormatBNB = BNBPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceBNB.innerHTML = 'USD ' + usFormatBNB;
        priceBNBNow.innerHTML = usFormatBNB;
        bnPrice.innerHTML = usFormatBNB;


        const priceSolana = document.getElementById('solanaPrice');
        var usFormatSolana = solanaPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceSolana.innerHTML = usFormatSolana;


        const priceXRP = document.getElementById('XRPPrice');
        var usFormatxrp = XRPPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceXRP.innerHTML = usFormatxrp;


        const priceCardano = document.getElementById('CardanoPrice');
        var usFormatCardano = cardanoPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceCardano.innerHTML = usFormatCardano;


        const priceAvalanche = document.getElementById('priceAvalanche');
        const priceAVAX = document.getElementById('priceAVAX');
        const priceAVAXNow = document.getElementById('priceAVAXNew');
        var usFormatAvalanchе = AvalanchePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceAvalanche.innerHTML = usFormatAvalanchе;
        priceAVAX.innerHTML = usFormatAvalanchе;
        priceAVAXNow.innerHTML = usFormatAvalanchе;


        const priceSHIB = document.getElementById('priceShiba');
        const formattedSHIBPrice = (SHIBPrice * 1.0).toFixed(6);
        priceSHIB.innerHTML = '$' + formattedSHIBPrice;


        const DogePrice = document.getElementById('priceDOGE');
        var usFormatDoge = DOGEPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        DogePrice.innerHTML = usFormatDoge;


        const PriceTRON = document.getElementById('priceTRON');
        var usFormatTRON = TRONPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceTRON.innerHTML = usFormatTRON;


        const PricePolygon = document.getElementById('priceMATIC');
        var usFormatPolygon = PolygonPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PricePolygon.innerHTML = usFormatPolygon;


        const PriceUSDC = document.getElementById('priceUSDC');
        const PriceOne = document.getElementById('priceUSDC_One');
        const PriceUSDCNew = document.getElementById('priceUSDCNew');
        var usFormatUSDC = USDCPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceUSDC.innerHTML = usFormatUSDC;
        PriceOne.innerHTML = usFormatUSDC;
        PriceUSDCNew.innerHTML = usFormatUSDC;


        const BTC_Cash = document.getElementById('priceBTCcash');
        var usFormatBTC_Cash = BTCCASHPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        BTC_Cash.innerHTML = usFormatBTC_Cash;


        const ChainlinkPrice = document.getElementById('priceChainlink');
        const priceLINK = document.getElementById('priceLINK');
        const priceLINKNow = document.getElementById('priceLINKNew');
        var usFormatChainlink = chainlinkPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        ChainlinkPrice.innerHTML = usFormatChainlink;
        priceLINK.innerHTML = usFormatChainlink;
        priceLINKNow.innerHTML = usFormatChainlink;


        const priceLTC = document.getElementById('priceLTC');
        const priceLTCNow = document.getElementById('priceLTCNew');
        const priceLite = document.getElementById('priceLitecoin');
        var usFormatLitcoin = litecoinPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        priceLTC.innerHTML = usFormatLitcoin;
        priceLTCNow.innerHTML = usFormatLitcoin;
        priceLite.innerHTML = usFormatLitcoin;


        const PriceICP = document.getElementById('priceICP');
        const PriceICPNow = document.getElementById('priceICPNew');
        const PriceINT = document.getElementById('priceInternet');
        var usFormatICP = ICPprice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceICP.innerHTML = usFormatICP;
        PriceICPNow.innerHTML = usFormatICP;
        PriceINT.innerHTML = usFormatICP;


        const PriceUniswap = document.getElementById('priceUniswap');
        const PriceUniswapNew = document.getElementById('priceUniswapNew');
        const PriceUni = document.getElementById('priceUNI');
        var usFormatUniswap = UniswapPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceUniswap.innerHTML = usFormatUniswap;
        PriceUniswapNew.innerHTML = usFormatUniswap;
        PriceUni.innerHTML = usFormatUniswap;


        const PriceIMX = document.getElementById('priceImmutable');
        const PriceIMXNew = document.getElementById('priceImmutableNew');
        const PriceImmutable = document.getElementById('priceIMX');
        var usFormatIMX = IMXPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceIMX.innerHTML = usFormatIMX;
        PriceIMXNew.innerHTML = usFormatIMX;
        PriceImmutable.innerHTML = usFormatIMX;


        const PriceGALA = document.getElementById('priceGALA');
        const PriceGALANew = document.getElementById('priceGALANew');
        const PriceGALA_one = document.getElementById('priceG');
        const usFormatGALA = (GALAPrice * 1.0).toFixed(4);
        PriceGALA.innerHTML = '$' + usFormatGALA;
        PriceGALANew.innerHTML = usFormatGALA;
        PriceGALA_one.innerHTML = '$' + usFormatGALA;


        const PriceAPE = document.getElementById('priceAPE');
        const PriceAPENew = document.getElementById('priceAPENew');
        const PriceApeCoin = document.getElementById('priceApeCoin');
        var usFormatAPE = APEPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceAPE.innerHTML = usFormatAPE;
        PriceAPENew.innerHTML = usFormatAPE;
        PriceApeCoin.innerHTML = usFormatAPE;


        const PriceSUSHI = document.getElementById('priceSushiSwap');
        const PriceSUSHINew = document.getElementById('priceSushiSwapNew');
        const PriceShushiSwap = document.getElementById('priceSUSHI');
        var usFormatSUSHI = SHUSHIPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceSUSHI.innerHTML = usFormatSUSHI;
        PriceSUSHINew.innerHTML = usFormatSUSHI;
        PriceShushiSwap.innerHTML = usFormatSUSHI;


        const PriceStacks = document.getElementById('priceStacks');
        const PriceStacksNew = document.getElementById('priceStacksNew');
        const PriceStack = document.getElementById('priceStacks_one');
        var usFormatStacks = StacksPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceStacks.innerHTML = usFormatStacks;
        PriceStacksNew.innerHTML = usFormatStacks;
        PriceStack.innerHTML = usFormatStacks;


        const PriceSTX = document.getElementById('pricePolkadot');
        const PriceSTXNew = document.getElementById('pricePolkadotNew');
        const PricePolk = document.getElementById('pricePolk');
        var usFormatSTX = STXPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceSTX.innerHTML = usFormatSTX;
        PriceSTXNew.innerHTML = usFormatSTX;
        PricePolk.innerHTML = usFormatSTX;


        const PriceKusama = document.getElementById('priceKusama');
        const PriceKusamaNew = document.getElementById('priceKusamaNew');
        const PriceKSM = document.getElementById('priceKSM');
        var usFormatKusama = KusamaPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceKusama.innerHTML = usFormatKusama;
        PriceKusamaNew.innerHTML = usFormatKusama;
        PriceKSM.innerHTML = usFormatKusama;


        const PriceHelium = document.getElementById('priceHelium');
        const PriceHeliumNew = document.getElementById('priceHeliumNew');
        const PriceHel = document.getElementById('priceHNT');
        var usFormatHelium = HeliumPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceHelium.innerHTML = usFormatHelium;
        PriceHeliumNew.innerHTML = usFormatHelium;
        PriceHel.innerHTML = usFormatHelium;


        const PriceSolana = document.getElementById('priceSOL');
        const PriceSolanaNew = document.getElementById('priceSOLNew');
        var usFormatSolana = solanaPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceSolana.innerHTML = usFormatSolana;
        PriceSolanaNew.innerHTML = usFormatSolana;


        const PriceGraph = document.getElementById('priceTheGraph');
        const PriceGraphNew = document.getElementById('priceTheGraphNew');
        const PriceGRT = document.getElementById('priceGRT');
        var usFormatGraph = GraphPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceGraph.innerHTML = usFormatGraph;
        PriceGraphNew.innerHTML = usFormatGraph;
        PriceGRT.innerHTML = usFormatGraph;


        const PriceRender = document.getElementById('priceRender');
        const PriceRenderNew = document.getElementById('priceRenderNew');
        const PriceRNDR = document.getElementById('priceRNDR');
        var usFormatRender = RenderPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceRender.innerHTML = usFormatRender;
        PriceRenderNew.innerHTML = usFormatRender;
        PriceRNDR.innerHTML = usFormatRender;


        const PriceTAO = document.getElementById('priceTAO');
        var usFormatTAO = PriceBittensor.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        PriceTAO.innerHTML = usFormatTAO;
    }

    // Get crypto prices and display them
    getCryptoPrices();
});






