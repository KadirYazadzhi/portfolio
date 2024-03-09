


function getMarketCap() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,bittensor,ethereum,litecoin,ripple,binancecoin,tether,cardano,helium,solana,the-graph,xrp,shiba-inu,matic-network,blockstack,tron,dogecoin,kusama,usd-coin,chainlink,bitcoin-cash,uniswap,gala,immutable-x,sushi,render-token,apecoin,internet-computer,polkadot,avalanche-2&vs_currencies=usd&include_market_cap=true')
        .then(response => response.json())
        .then(data => displayMarketCap(data))
        .catch(error => console.error('Error fetching crypto prices:', error));
}

function displayMarketCap(prices) {
    const bitcoinMarketCap = prices['bitcoin']['usd_market_cap'];
    const ethereumMarketCap = prices['ethereum']['usd_market_cap'];
    const tetherMarketCap = prices['tether']['usd_market_cap'];
    const BNBMarketCap = prices['binancecoin']['usd_market_cap'];
    const SolanaMarketCap = prices['solana']['usd_market_cap'];
    const XRPMarketCap = prices['ripple']['usd_market_cap'];
    const CardanoMarketCap = prices['cardano']['usd_market_cap'];
    const AvalancheMarketCap = prices['avalanche-2']['usd_market_cap'];
    const ShibaMarketCap = prices['shiba-inu']['usd_market_cap'];
    const DOGEMarketCap = prices['dogecoin']['usd_market_cap'];
    const TRONMarketCap = prices['tron']['usd_market_cap'];
    const PolygonMarketCap = prices['matic-network']['usd_market_cap'];
    const USDCMarketCap = prices['usd-coin']['usd_market_cap'];
    const BTCCASHMarketCap = prices['bitcoin-cash']['usd_market_cap'];
    const ChainlinkMarketCap = prices['chainlink']['usd_market_cap'];
    const UniswapMarketCap = prices['uniswap']['usd_market_cap'];
    const LitecoinMarketCap = prices['litecoin']['usd_market_cap'];
    const ICPMarketCap = prices['internet-computer']['usd_market_cap'];
    const IMXMarketCap = prices['immutable-x']['usd_market_cap'];
    const GALAMarketCap = prices['gala']['usd_market_cap'];
    const APEMarketCap = prices['apecoin']['usd_market_cap'];
    const SHUSHIMarketCap = prices['sushi']['usd_market_cap'];
    const StacksMarketCap = prices['blockstack']['usd_market_cap'];
    const STXMarketCap = prices['polkadot']['usd_market_cap'];
    const KusamaMarketCap = prices['kusama']['usd_market_cap'];
    const HeliumMarketCap = prices['helium']['usd_market_cap'];
    const GraphMarketCap = prices['the-graph']['usd_market_cap'];
    const RenderMarketCap = prices['render-token']['usd_market_cap'];
    const BittensorMarketCap = prices['bittensor']['usd_market_cap'];


    const marketCapBitcoin = document.getElementById('BitcoinMarketCap');
    const formattedBitcoinMarketCap = bitcoinMarketCap.toLocaleString('en-US');
    marketCapBitcoin.innerHTML = "$" + formattedBitcoinMarketCap;

    const marketCapEthereum = document.getElementById('ethereumMarketCap');
    const formattedEthereumMarketCap = ethereumMarketCap.toLocaleString('en-US');
    marketCapEthereum.innerHTML = "$" + formattedEthereumMarketCap;

    const marketCapTether = document.getElementById('TetherMarketCap');
    const formattedTetherMarketCap = tetherMarketCap.toLocaleString('en-US');
    marketCapTether.innerHTML = "$" + formattedTetherMarketCap;

    const marketCapBNB = document.getElementById('BNBMarketCap');
    const formattedBNBMarketCap = BNBMarketCap.toLocaleString('en-US');
    marketCapBNB.innerHTML = "$" + formattedBNBMarketCap;

    const marketCapSolana = document.getElementById('SolanaMarketCap');
    const formattedSolanaMarketCap = SolanaMarketCap.toLocaleString('en-US');
    marketCapSolana.innerHTML = "$" + formattedSolanaMarketCap;

    const marketCapXRP = document.getElementById('XRPMarketCap');
    const formattedXRPMarketCap = XRPMarketCap.toLocaleString('en-US');
    marketCapXRP.innerHTML = "$" + formattedXRPMarketCap;

    const marketCapCardano = document.getElementById('CardanoMarketCap');
    const formattedCardanoMarketCap = CardanoMarketCap.toLocaleString('en-US');
    marketCapCardano.innerHTML = "$" + formattedCardanoMarketCap;

    const marketCapAvalanche = document.getElementById('AvalancheMarketCap');
    const formattedAvalancheMarketCap = AvalancheMarketCap.toLocaleString('en-US');
    marketCapAvalanche.innerHTML = "$" + formattedAvalancheMarketCap;

    const marketCapShiba = document.getElementById('ShibaInuMarketCap');
    const formattedShibaMarketCap = ShibaMarketCap.toLocaleString('en-US');
    marketCapShiba.innerHTML = "$" + formattedShibaMarketCap;

    const marketDOGE = document.getElementById('DOGEMarketCap');
    const formattedDOGEMarketCap = DOGEMarketCap.toLocaleString('en-US');
    marketDOGE.innerHTML = "$" + formattedDOGEMarketCap;

    const marketTRON = document.getElementById('TRONMarketCap');
    const formattedTRONMarketCap = TRONMarketCap.toLocaleString('en-US');
    marketTRON.innerHTML = "$" + formattedTRONMarketCap;

    const marketPolygon = document.getElementById('PolygonMarketCap');
    const formattedPolygonMarketCap = PolygonMarketCap.toLocaleString('en-US');
    marketPolygon.innerHTML = "$" + formattedPolygonMarketCap;

    const marketUSDC = document.getElementById('USDCMarkerCap');
    const formattedUSDCMarketCap = USDCMarketCap.toLocaleString('en-US');
    marketUSDC.innerHTML = "$" + formattedUSDCMarketCap;

    const marketBCH = document.getElementById('BCHMarketCap');
    const formattedBCHMarketCap = BTCCASHMarketCap.toLocaleString('en-US');
    marketBCH.innerHTML = "$" + formattedBCHMarketCap;

    const marketChainlink = document.getElementById('LINKMarketCap');
    const formattedChainlinkMarketCap = ChainlinkMarketCap.toLocaleString('en-US');
    marketChainlink.innerHTML = "$" + formattedChainlinkMarketCap;

    const marketUniswap = document.getElementById('UniswapMarketCap');
    const formattedUniswapMarketCap = UniswapMarketCap.toLocaleString('en-US');
    marketUniswap.innerHTML = "$" + formattedUniswapMarketCap;

    const marketLitecoin = document.getElementById('LTCMarketCap');
    const formattedLitecoinMarketCap = LitecoinMarketCap.toLocaleString('en-US');
    marketLitecoin.innerHTML = "$" + formattedLitecoinMarketCap;

    const marketImmutable = document.getElementById('IMXMarketCap');
    const formattedImmutableMarketCap = IMXMarketCap.toLocaleString('en-US');
    marketImmutable.innerHTML = "$" + formattedImmutableMarketCap;

    const marketIP = document.getElementById('ICPMarketCap');
    const formattedIPMarketCap = ICPMarketCap.toLocaleString('en-US');
    marketIP.innerHTML = "$" + formattedIPMarketCap;

    const marketGALA = document.getElementById('GALAMarketCap');
    const formattedGALAMarketCap = GALAMarketCap.toLocaleString('en-US');
    marketGALA.innerHTML = "$" + formattedGALAMarketCap;

    const marketApeCoin = document.getElementById('APEMarketCap');
    const formattedApeCoinMarketCap = APEMarketCap.toLocaleString('en-US');
    marketApeCoin.innerHTML = "$" + formattedApeCoinMarketCap;

    const marketSHUSHI = document.getElementById('SUSHIMarketCap');
    const formattedSHUSHIMarketCap = SHUSHIMarketCap.toLocaleString('en-US');
    marketSHUSHI.innerHTML = "$" + formattedSHUSHIMarketCap;

    const marketStacks = document.getElementById('STXMarketCap');
    const formattedStacksMarketCap = StacksMarketCap.toLocaleString('en-US');
    marketStacks.innerHTML = "$" + formattedStacksMarketCap;

    const marketPolkadot = document.getElementById('PolkadotMarketCap');
    const formattedPolkadotMarketCap = STXMarketCap.toLocaleString('en-US');
    marketPolkadot.innerHTML = "$" + formattedPolkadotMarketCap;

    const marketKusama = document.getElementById('KSMMarketCap');
    const formattedKusamaMarketCap = KusamaMarketCap.toLocaleString('en-US');
    marketKusama.innerHTML = "$" + formattedKusamaMarketCap;

    const marketHelium = document.getElementById('HNTMarketCap');
    const formattedHeliumMarketCap = HeliumMarketCap.toLocaleString('en-US');
    marketHelium.innerHTML = "$" + formattedHeliumMarketCap;

    const marketGraph = document.getElementById('GRTMarketCap');
    const formattedGraphMarketCap = GraphMarketCap.toLocaleString('en-US');
    marketGraph.innerHTML = "$" + formattedGraphMarketCap;

    const marketRender = document.getElementById('RenderMarketCap');
    const formattedRenderMarketCap = RenderMarketCap.toLocaleString('en-US');
    marketRender.innerHTML = "$" + formattedRenderMarketCap;

    const marketBittensor = document.getElementById('TAOMarketCap');
    const formattedBittensorMarketCap = BittensorMarketCap.toLocaleString('en-US');
    marketBittensor.innerHTML = "$" + formattedBittensorMarketCap;
}

getMarketCap();





