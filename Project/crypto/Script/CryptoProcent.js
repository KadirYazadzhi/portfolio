function getCryptoData() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,bittensor,ethereum,litecoin,ripple,binancecoin,tether,cardano,helium,solana,the-graph,xrp,shiba-inu,matic-network,blockstack,tron,dogecoin,kusama,usd-coin,chainlink,bitcoin-cash,uniswap,gala,immutable-x,sushi,render-token,apecoin,internet-computer,polkadot,avalanche-2&price_change_percentage=24h')
        .then(response => response.json())
        .then(data => displayCryptoData(data))
        .catch(error => console.error('Error fetching crypto data:', error));
}

function displayCryptoData(data) {

    const bitcoinData = data.find(crypto => crypto.id === 'bitcoin');
    if (bitcoinData) {
        const bitcoinChange24h = bitcoinData.price_change_percentage_24h;
        const bitcoinChangeElement = document.getElementById('priceChangeBitcoin');
        const BitcoinTableElement = document.getElementById('BitcoinTable');
        const formattedBitcoinChange = (bitcoinChange24h !== null && bitcoinChange24h !== undefined) ? bitcoinChange24h.toFixed(2) : 'N/A';
        if (bitcoinChange24h > 0){
            bitcoinChangeElement.classList.add("green");
            BitcoinTableElement.classList.add("green");
            bitcoinChangeElement.innerHTML = "+" + formattedBitcoinChange + "%";
            BitcoinTableElement.innerHTML = "+" + formattedBitcoinChange + "%";
        }
        else if (bitcoinChange24h === 0) {
            bitcoinChangeElement.classList.add("grey");
            bitcoinChangeElement.innerHTML = formattedBitcoinChange + "%";
            BitcoinTableElement.classList.add("grey");
            BitcoinTableElement.innerHTML = formattedBitcoinChange + "%";
        }
        else {
            bitcoinChangeElement.classList.add("red");
            bitcoinChangeElement.innerHTML = formattedBitcoinChange + "%";
            BitcoinTableElement.classList.add("red");
            BitcoinTableElement.innerHTML = formattedBitcoinChange + "%";
        }
    } else {
        console.error('Bitcoin data not found');
    }


    const ethereumData = data.find(crypto => crypto.id === 'ethereum');
    if (ethereumData) {
        const ethereumChange24h = ethereumData.price_change_percentage_24h;
        const ethereumChangeElement = document.getElementById('priceChangeEthereum');
        const ethereumTableElement = document.getElementById('ethereumTable');
        const formattedEthereumChange = (ethereumChange24h !== null && ethereumChange24h !== undefined) ? ethereumChange24h.toFixed(2) : 'N/A';
        if (ethereumChange24h > 0){
            ethereumChangeElement.classList.add("green");
            ethereumChangeElement.innerHTML = "+" + formattedEthereumChange + "%";
            ethereumTableElement.classList.add("green");
            ethereumTableElement.innerHTML = "+" + formattedEthereumChange + "%";
        }
        else if (ethereumChange24h === 0) {
            ethereumChangeElement.classList.add("grey");
            ethereumChangeElement.innerHTML = formattedEthereumChange + "%";
            ethereumTableElement.classList.add("grey");
            ethereumTableElement.innerHTML = formattedEthereumChange + "%";
        }
        else {
            ethereumChangeElement.classList.add("red");
            ethereumChangeElement.innerHTML = formattedEthereumChange + "%";
            ethereumTableElement.classList.add("red");
            ethereumTableElement.innerHTML = formattedEthereumChange + "%";
        }
    } else {
        console.error('Ethereum data not found');
    }


    const TetherData = data.find(crypto => crypto.id === 'tether');
    if (TetherData) {
        const TetherChange24h = TetherData.price_change_percentage_24h;
        const TetherChangeElement = document.getElementById('TetherChange');
        const tetherTableElement = document.getElementById('TetherTable');
        const formattedTetherChange = (TetherChange24h !== null && TetherChange24h !== undefined) ? TetherChange24h.toFixed(2) : 'N/A';
        if (TetherChange24h > 0){
            TetherChangeElement.classList.add("green");
            TetherChangeElement.innerHTML = "+" + formattedTetherChange + "%";
            tetherTableElement.classList.add("green");
            tetherTableElement.innerHTML = "+" + formattedTetherChange + "%";
        }
        else if (TetherChange24h === 0) {
            TetherChangeElement.classList.add("grey");
            TetherChangeElement.innerHTML = formattedTetherChange + "%";
            tetherTableElement.classList.add("grey");
            tetherTableElement.innerHTML = formattedTetherChange + "%";
        }
        else {
            TetherChangeElement.classList.add("red");
            TetherChangeElement.innerHTML = formattedTetherChange + "%";
            tetherTableElement.classList.add("red");
            tetherTableElement.innerHTML = formattedTetherChange + "%";
        }
    } else {
        console.error('Tether data not found');
    }


    const BNBData = data.find(crypto => crypto.id === 'binancecoin');
    if (BNBData) {
        const BNBChange24h = BNBData.price_change_percentage_24h;
        const BNBChangeElement = document.getElementById('BNBChange');
        const TableElement = document.getElementById('BNBTable');
        const formattedBNBChange = (BNBChange24h !== null && BNBChange24h !== undefined) ? BNBChange24h.toFixed(2) : 'N/A';
        if (BNBChange24h > 0){
            BNBChangeElement.classList.add("green");
            BNBChangeElement.innerHTML = "+" + formattedBNBChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedBNBChange + "%";
        }
        else if (BNBChange24h === 0) {
            BNBChangeElement.classList.add("grey");
            BNBChangeElement.innerHTML = formattedBNBChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedBNBChange + "%";
        }
        else {
            BNBChangeElement.classList.add("red");
            BNBChangeElement.innerHTML = formattedBNBChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedBNBChange + "%";
        }
    } else {
        console.error('BNB data not found');
    }


    const AvalancheData = data.find(crypto => crypto.id === 'avalanche-2');
    if (AvalancheData) {
        const AvalancheChange24h = AvalancheData.price_change_percentage_24h;
        const AvalancheChangeElement = document.getElementById('AVAXChange');
        const TableElement = document.getElementById('AVAXTable');
        const formattedAvalancheChange = (AvalancheChange24h !== null && AvalancheChange24h !== undefined) ? AvalancheChange24h.toFixed(2) : 'N/A';
        if (AvalancheChange24h > 0){
            AvalancheChangeElement.classList.add("green");
            AvalancheChangeElement.innerHTML = "+" + formattedAvalancheChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedAvalancheChange + "%";
        }
        else if (AvalancheChange24h === 0) {
            AvalancheChangeElement.classList.add("grey");
            AvalancheChangeElement.innerHTML = formattedAvalancheChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedAvalancheChange + "%";
        }
        else {
            AvalancheChangeElement.classList.add("red");
            AvalancheChangeElement.innerHTML = formattedAvalancheChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedAvalancheChange + "%";
        }
    } else {
        console.error('Avalanche data not found');
    }


    const LINKData = data.find(crypto => crypto.id === 'chainlink');
    if (LINKData) {
        const LINKChange24h = LINKData.price_change_percentage_24h;
        const LINKChangeElement = document.getElementById('LINKChange');
        const TableElement = document.getElementById('LINKTable');
        const formattedLINKChange = (LINKChange24h !== null && LINKChange24h !== undefined) ? LINKChange24h.toFixed(2) : 'N/A';
        if (LINKChange24h > 0){
            LINKChangeElement.classList.add("green");
            LINKChangeElement.innerHTML = "+" + formattedLINKChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedLINKChange + "%";
        }
        else if (LINKChange24h === 0) {
            LINKChangeElement.classList.add("grey");
            LINKChangeElement.innerHTML = formattedLINKChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedLINKChange + "%";
        }
        else {
            LINKChangeElement.classList.add("red");
            LINKChangeElement.innerHTML = formattedLINKChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedLINKChange + "%";
        }
    } else {
        console.error('Chainlink data not found');
    }


    const UniswapData = data.find(crypto => crypto.id === 'uniswap');
    if (UniswapData) {
        const UniswapChange24h = UniswapData.price_change_percentage_24h;
        const UniswapChangeElement = document.getElementById('UniswapChange');
        const TableElement = document.getElementById('UNITable');
        const formattedUniswapChange = (UniswapChange24h !== null && UniswapChange24h !== undefined) ? UniswapChange24h.toFixed(2) : 'N/A';
        if (UniswapChange24h > 0){
            UniswapChangeElement.classList.add("green");
            UniswapChangeElement.innerHTML = "+" + formattedUniswapChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedUniswapChange + "%";
        }
        else if (UniswapChange24h === 0) {
            UniswapChangeElement.classList.add("grey");
            UniswapChangeElement.innerHTML = formattedUniswapChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedUniswapChange + "%";
        }
        else {
            UniswapChangeElement.classList.add("red");
            UniswapChangeElement.innerHTML = formattedUniswapChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedUniswapChange + "%";
        }
    } else {
        console.error('Uniswap data not found');
    }


    const LTCData = data.find(crypto => crypto.id === 'litecoin');
    if (LTCData) {
        const LTCChange24h = LTCData.price_change_percentage_24h;
        const LTCChangeElement = document.getElementById('ChangeLTC');
        const TableElement = document.getElementById('LTCTable');
        const formattedLTCChange = (LTCChange24h !== null && LTCChange24h !== undefined) ? LTCChange24h.toFixed(2) : 'N/A';
        if (LTCChange24h > 0){
            LTCChangeElement.classList.add("green");
            LTCChangeElement.innerHTML = "+" + formattedLTCChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedLTCChange + "%";
        }
        else if (LTCChange24h === 0) {
            LTCChangeElement.classList.add("grey");
            LTCChangeElement.innerHTML = formattedLTCChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedLTCChange + "%";
        }
        else {
            LTCChangeElement.classList.add("red");
            LTCChangeElement.innerHTML = formattedLTCChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedLTCChange + "%";
        }
    } else {
        console.error('Litecoin data not found');
    }


    const IMXData = data.find(crypto => crypto.id === 'immutable-x');
    if (IMXData) {
        const IMXChange24h = IMXData.price_change_percentage_24h;
        const IMXChangeElement = document.getElementById('IMXChange');
        const TableElement = document.getElementById('IMXTable');
        const formattedIMXChange = (IMXChange24h !== null && IMXChange24h !== undefined) ? IMXChange24h.toFixed(2) : 'N/A';
        if (IMXChange24h > 0){
            IMXChangeElement.classList.add("green");
            IMXChangeElement.innerHTML = "+" + formattedIMXChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedIMXChange + "%";
        }
        else if (IMXChange24h === 0) {
            IMXChangeElement.classList.add("grey");
            IMXChangeElement.innerHTML = formattedIMXChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedIMXChange + "%";
        }
        else {
            IMXChangeElement.classList.add("red");
            IMXChangeElement.innerHTML = formattedIMXChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedIMXChange + "%";
        }
    } else {
        console.error('IMX data not found');
    }


    const IPData = data.find(crypto => crypto.id === 'internet-computer');
    if (IPData) {
        const IPChange24h = IPData.price_change_percentage_24h;
        const IPChangeElement = document.getElementById('ICPChange');
        const TableElement = document.getElementById('IPTable');
        const formattedIPChange = (IPChange24h !== null && IPChange24h !== undefined) ? IPChange24h.toFixed(2) : 'N/A';
        if (IPChange24h > 0){
            IPChangeElement.classList.add("green");
            IPChangeElement.innerHTML = "+" + formattedIPChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedIPChange + "%";
        }
        else if (IPChange24h === 0) {
            IPChangeElement.classList.add("grey");
            IPChangeElement.innerHTML = formattedIPChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedIPChange + "%";
        }
        else {
            IPChangeElement.classList.add("red");
            IPChangeElement.innerHTML = formattedIPChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedIPChange + "%";
        }
    } else {
        console.error('Internet computer data not found');
    }


    const GALAData = data.find(crypto => crypto.id === 'gala');
    if (GALAData) {
        const GALAChange24h = GALAData.price_change_percentage_24h;
        const GALAChangeElement = document.getElementById('GALAChange');
        const TableElement = document.getElementById('GALATable');
        const formattedGALAChange = (GALAChange24h !== null && GALAChange24h !== undefined) ? GALAChange24h.toFixed(2) : 'N/A';
        if (GALAChange24h > 0){
            GALAChangeElement.classList.add("green");
            GALAChangeElement.innerHTML = "+" + formattedGALAChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedGALAChange + "%";
        }
        else if (GALAChange24h === 0) {
            GALAChangeElement.classList.add("grey");
            GALAChangeElement.innerHTML = formattedGALAChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedGALAChange + "%";
        }
        else {
            GALAChangeElement.classList.add("red");
            GALAChangeElement.innerHTML = formattedGALAChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedGALAChange + "%";
        }
    } else {
        console.error('GALA data not found');
    }


    const APEData = data.find(crypto => crypto.id === 'apecoin');
    if (APEData) {
        const APEChange24h = APEData.price_change_percentage_24h;
        const APEChangeElement = document.getElementById('APEChange');
        const TableElement = document.getElementById('APETable');
        const formattedAPEChange = (APEChange24h !== null && APEChange24h !== undefined) ? APEChange24h.toFixed(2) : 'N/A';
        if (APEChange24h > 0){
            APEChangeElement.classList.add("green");
            APEChangeElement.innerHTML = "+" + formattedAPEChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedAPEChange + "%";
        }
        else if (APEChange24h === 0) {
            APEChangeElement.classList.add("grey");
            APEChangeElement.innerHTML = formattedAPEChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedAPEChange + "%";
        }
        else {
            APEChangeElement.classList.add("red");
            APEChangeElement.innerHTML = formattedAPEChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedAPEChange + "%";
        }
    } else {
        console.error('ApeCoin data not found');
    }


    const SHUSHIData = data.find(crypto => crypto.id === 'sushi');
    if (SHUSHIData) {
        const SHUSHIChange24h = SHUSHIData.price_change_percentage_24h;
        const SHUSHIChangeElement = document.getElementById('SUSHIChange');
        const TableElement = document.getElementById('SUSHITable');
        const formattedSHUSHIChange = (SHUSHIChange24h !== null && SHUSHIChange24h !== undefined) ? SHUSHIChange24h.toFixed(2) : 'N/A';
        if (SHUSHIChange24h > 0){
            SHUSHIChangeElement.classList.add("green");
            SHUSHIChangeElement.innerHTML = "+" + formattedSHUSHIChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedSHUSHIChange + "%";
        }
        else if (SHUSHIChange24h === 0) {
            SHUSHIChangeElement.classList.add("grey");
            SHUSHIChangeElement.innerHTML = formattedSHUSHIChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedSHUSHIChange + "%";
        }
        else {
            SHUSHIChangeElement.classList.add("red");
            SHUSHIChangeElement.innerHTML = formattedSHUSHIChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedSHUSHIChange + "%";
        }
    } else {
        console.error('SUSHI data not found');
    }


    const STXData = data.find(crypto => crypto.id === 'blockstack');
    if (STXData) {
        const STXChange24h = STXData.price_change_percentage_24h;
        const STXChangeElement = document.getElementById('STXChange');
        const TableElement = document.getElementById('StacksTable');
        const formattedSTXChange = (STXChange24h !== null && STXChange24h !== undefined) ? STXChange24h.toFixed(2) : 'N/A';
        if (STXChange24h > 0){
            STXChangeElement.classList.add("green");
            STXChangeElement.innerHTML = "+" + formattedSTXChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedSTXChange + "%";
        }
        else if (STXChange24h === 0) {
            STXChangeElement.classList.add("grey");
            STXChangeElement.innerHTML = formattedSTXChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedSTXChange + "%";
        }
        else {
            STXChangeElement.classList.add("red");
            STXChangeElement.innerHTML = formattedSTXChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedSTXChange + "%";
        }
    } else {
        console.error('SUSHI data not found');
    }


    const PolkadotData = data.find(crypto => crypto.id === 'polkadot');
    if (PolkadotData) {
        const PolkadotChange24h = PolkadotData.price_change_percentage_24h;
        const PolkadotChangeElement = document.getElementById('PolkadotChange');
        const TableElement = document.getElementById('STXTable');
        const formattedPolkadotChange = (PolkadotChange24h !== null && PolkadotChange24h !== undefined) ? PolkadotChange24h.toFixed(2) : 'N/A';
        if (PolkadotChange24h > 0){
            PolkadotChangeElement.classList.add("green");
            PolkadotChangeElement.innerHTML = "+" + formattedPolkadotChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedPolkadotChange + "%";
        }
        else if (PolkadotChange24h === 0) {
            PolkadotChangeElement.classList.add("grey");
            PolkadotChangeElement.innerHTML = formattedPolkadotChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedPolkadotChange + "%";
        }
        else {
            PolkadotChangeElement.classList.add("red");
            PolkadotChangeElement.innerHTML = formattedPolkadotChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedPolkadotChange + "%";
        }
    } else {
        console.error('Polkadot data not found');
    }




    const USDCData = data.find(crypto => crypto.id === 'usd-coin');
    if (USDCData) {
        const USDCChange24h = USDCData.price_change_percentage_24h;
        const USDCChangeElement = document.getElementById('USDCChange');
        const TableElement = document.getElementById('USDCTable');
        const formattedUSDCChange = (USDCChange24h !== null && USDCChange24h !== undefined) ? USDCChange24h.toFixed(2) : 'N/A';
        if (USDCChange24h > 0){
            USDCChangeElement.classList.add("green");
            USDCChangeElement.innerHTML = "+" + formattedUSDCChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedUSDCChange + "%";
        }
        else if (USDCChange24h === 0) {
            USDCChangeElement.classList.add("grey");
            USDCChangeElement.innerHTML = formattedUSDCChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedUSDCChange + "%";
        }
        else {
            USDCChangeElement.classList.add("red");
            USDCChangeElement.innerHTML = formattedUSDCChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedUSDCChange + "%";
        }
    } else {
        console.error('USDC data not found');
    }




    const KusamaData = data.find(crypto => crypto.id === 'kusama');
    if (KusamaData) {
        const KusamaChange24h = KusamaData.price_change_percentage_24h;
        const KusamaChangeElement = document.getElementById('KusamaChange');
        const TableElement = document.getElementById('KSMTable');
        const formattedKusamaChange = (KusamaChange24h !== null && KusamaChange24h !== undefined) ? KusamaChange24h.toFixed(2) : 'N/A';
        if (KusamaChange24h > 0){
            KusamaChangeElement.classList.add("green");
            KusamaChangeElement.innerHTML = "+" + formattedKusamaChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedKusamaChange + "%";
        }
        else if (KusamaChange24h === 0) {
            KusamaChangeElement.classList.add("grey");
            KusamaChangeElement.innerHTML = formattedKusamaChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedKusamaChange + "%";
        }
        else {
            KusamaChangeElement.classList.add("red");
            KusamaChangeElement.innerHTML = formattedKusamaChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedKusamaChange + "%";
        }
    } else {
        console.error('Kusama data not found');
    }




    const SolanaData = data.find(crypto => crypto.id === 'solana');
    if (SolanaData) {
        const SolanaChange24h = SolanaData.price_change_percentage_24h;
        const SolanaChangeElement = document.getElementById('SolanaChange');
        const TableElement = document.getElementById('SolanaTable');
        const formattedSolanaChange = (SolanaChange24h !== null && SolanaChange24h !== undefined) ? SolanaChange24h.toFixed(2) : 'N/A';
        if (SolanaChange24h > 0){
            SolanaChangeElement.classList.add("green");
            SolanaChangeElement.innerHTML = "+" + formattedSolanaChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedSolanaChange + "%";
        }
        else if (SolanaChange24h === 0) {
            SolanaChangeElement.classList.add("grey");
            SolanaChangeElement.innerHTML = formattedSolanaChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedSolanaChange + "%";
        }
        else {
            SolanaChangeElement.classList.add("red");
            SolanaChangeElement.innerHTML = formattedSolanaChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedSolanaChange + "%";
        }
    } else {
        console.error('Solana data not found');
    }




    const HeliumData = data.find(crypto => crypto.id === 'helium');
    if (HeliumData) {
        const HeliumChange24h = HeliumData.price_change_percentage_24h;
        const HeliumChangeElement = document.getElementById('HeliumChange');
        const TableElement = document.getElementById('HNTTable');
        const formattedHeliumChange = (HeliumChange24h !== null && HeliumChange24h !== undefined) ? HeliumChange24h.toFixed(2) : 'N/A';
        if (HeliumChange24h > 0){
            HeliumChangeElement.classList.add("green");
            HeliumChangeElement.innerHTML = "+" + formattedHeliumChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedHeliumChange + "%";
        }
        else if (HeliumChange24h === 0) {
            HeliumChangeElement.classList.add("grey");
            HeliumChangeElement.innerHTML = formattedHeliumChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedHeliumChange + "%";
        }
        else {
            HeliumChangeElement.classList.add("red");
            HeliumChangeElement.innerHTML = formattedHeliumChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedHeliumChange + "%";
        }
    } else {
        console.error('Helium data not found');
    }



    const GraphData = data.find(crypto => crypto.id === 'the-graph');
    if (GraphData) {
        const GraphChange24h = GraphData.price_change_percentage_24h;
        const GraphChangeElement = document.getElementById('GraphChange');
        const TableElement = document.getElementById('GRTTable');
        const formattedGraphChange = (GraphChange24h !== null && GraphChange24h !== undefined) ? GraphChange24h.toFixed(2) : 'N/A';
        if (GraphChange24h > 0){
            GraphChangeElement.classList.add("green");
            GraphChangeElement.innerHTML = "+" + formattedGraphChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedGraphChange + "%";
        }
        else if (GraphChange24h === 0) {
            GraphChangeElement.classList.add("grey");
            GraphChangeElement.innerHTML = formattedGraphChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedGraphChange + "%";
        }
        else {
            GraphChangeElement.classList.add("red");
            GraphChangeElement.innerHTML = formattedGraphChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedGraphChange + "%";
        }
    } else {
        console.error('The Graph data not found');
    }



    const RenderData = data.find(crypto => crypto.id === 'render-token');
    if (RenderData) {
        const RenderChange24h = RenderData.price_change_percentage_24h;
        const RenderChangeElement = document.getElementById('RenderChange');
        const TableElement = document.getElementById('RenderTable');
        const formattedRenderChange = (RenderChange24h !== null && RenderChange24h !== undefined) ? RenderChange24h.toFixed(2) : 'N/A';
        if (RenderChange24h > 0){
            RenderChangeElement.classList.add("green");
            RenderChangeElement.innerHTML = "+" + formattedRenderChange + "%";
            TableElement.classList.add("green");
            TableElement.innerHTML = "+" + formattedRenderChange + "%";
        }
        else if (RenderChange24h === 0) {
            RenderChangeElement.classList.add("grey");
            RenderChangeElement.innerHTML = formattedRenderChange + "%";
            TableElement.classList.add("grey");
            TableElement.innerHTML = formattedRenderChange + "%";
        }
        else {
            RenderChangeElement.classList.add("red");
            RenderChangeElement.innerHTML = formattedRenderChange + "%";
            TableElement.classList.add("red");
            TableElement.innerHTML = formattedRenderChange + "%";
        }
    } else {
        console.error('Render data not found');
    }




    const XRPData = data.find(crypto => crypto.id === 'ripple');
    if (XRPData) {
        const XRPChange24h = XRPData.price_change_percentage_24h;
        const XRPChangeElement = document.getElementById('XRPTable');
        const formattedXRPChange = (XRPChange24h !== null && XRPChange24h !== undefined) ? XRPChange24h.toFixed(2) : 'N/A';
        if (XRPChange24h > 0){
            XRPChangeElement.classList.add("green");
            XRPChangeElement.innerHTML = "+" + formattedXRPChange + "%";
        }
        else if (XRPChange24h === 0) {
            XRPChangeElement.classList.add("grey");
            XRPChangeElement.innerHTML = formattedXRPChange + "%";
        }
        else {
            XRPChangeElement.classList.add("red");
            XRPChangeElement.innerHTML = formattedXRPChange + "%";
        }
    } else {
        console.error('XRP data not found');
    }



    const ADAData = data.find(crypto => crypto.id === 'cardano');
    if (ADAData) {
        const ADAChange24h = ADAData.price_change_percentage_24h;
        const ADAChangeElement = document.getElementById('CardanoTable');
        const formattedADAChange = (ADAChange24h !== null && ADAChange24h !== undefined) ? ADAChange24h.toFixed(2) : 'N/A';
        if (ADAChange24h > 0){
            ADAChangeElement.classList.add("green");
            ADAChangeElement.innerHTML = "+" + formattedADAChange + "%";
        }
        else if (ADAChange24h === 0) {
            ADAChangeElement.classList.add("grey");
            ADAChangeElement.innerHTML = formattedADAChange + "%";
        }
        else {
            ADAChangeElement.classList.add("red");
            ADAChangeElement.innerHTML = formattedADAChange + "%";
        }
    } else {
        console.error('Cardano data not found');
    }




    const SHIBAData = data.find(crypto => crypto.id === 'shiba-inu');
    if (SHIBAData) {
        const SHIBAChange24h = SHIBAData.price_change_percentage_24h;
        const SHIBAChangeElement = document.getElementById('ShibaTable');
        const formattedSHIBAChange = (SHIBAChange24h !== null && SHIBAChange24h !== undefined) ? SHIBAChange24h.toFixed(2) : 'N/A';
        if (SHIBAChange24h > 0){
            SHIBAChangeElement.classList.add("green");
            SHIBAChangeElement.innerHTML = "+" + formattedSHIBAChange + "%";
        }
        else if (SHIBAChange24h === 0) {
            SHIBAChangeElement.classList.add("grey");
            SHIBAChangeElement.innerHTML = formattedSHIBAChange + "%";
        }
        else {
            SHIBAChangeElement.classList.add("red");
            SHIBAChangeElement.innerHTML = formattedSHIBAChange + "%";
        }
    } else {
        console.error('Shiba Inu data not found');
    }



    const DOGEData = data.find(crypto => crypto.id === 'dogecoin');
    if (DOGEData) {
        const DOGEChange24h = DOGEData.price_change_percentage_24h;
        const DOGEChangeElement = document.getElementById('DOGETable');
        const formattedDOGEChange = (DOGEChange24h !== null && DOGEChange24h !== undefined) ? DOGEChange24h.toFixed(2) : 'N/A';
        if (DOGEChange24h > 0){
            DOGEChangeElement.classList.add("green");
            DOGEChangeElement.innerHTML = "+" + formattedDOGEChange + "%";
        }
        else if (DOGEChange24h === 0) {
            DOGEChangeElement.classList.add("grey");
            DOGEChangeElement.innerHTML = formattedDOGEChange + "%";
        }
        else {
            DOGEChangeElement.classList.add("red");
            DOGEChangeElement.innerHTML = formattedDOGEChange + "%";
        }
    } else {
        console.error('Dogecoin data not found');
    }



    const TRONData = data.find(crypto => crypto.id === 'tron');
    if (TRONData) {
        const TRONChange24h = TRONData.price_change_percentage_24h;
        const TRONChangeElement = document.getElementById('TRXTable');
        const formattedTRONChange = (TRONChange24h !== null && TRONChange24h !== undefined) ? TRONChange24h.toFixed(2) : 'N/A';
        if (TRONChange24h > 0){
            TRONChangeElement.classList.add("green");
            TRONChangeElement.innerHTML = "+" + formattedTRONChange + "%";
        }
        else if (TRONChange24h === 0) {
            TRONChangeElement.classList.add("grey");
            TRONChangeElement.innerHTML = formattedTRONChange + "%";
        }
        else {
            TRONChangeElement.classList.add("red");
            TRONChangeElement.innerHTML = formattedTRONChange + "%";
        }
    } else {
        console.error('TRON data not found');
    }



    const PolygonData = data.find(crypto => crypto.id === 'matic-network');
    if (PolygonData) {
        const PolygonChange24h = PolygonData.price_change_percentage_24h;
        const PolygonChangeElement = document.getElementById('MATICTable');
        const formattedPolygonChange = (PolygonChange24h !== null && PolygonChange24h !== undefined) ? PolygonChange24h.toFixed(2) : 'N/A';
        if (PolygonChange24h > 0){
            PolygonChangeElement.classList.add("green");
            PolygonChangeElement.innerHTML = "+" + formattedPolygonChange + "%";
        }
        else if (PolygonChange24h === 0) {
            PolygonChangeElement.classList.add("grey");
            PolygonChangeElement.innerHTML = formattedPolygonChange + "%";
        }
        else {
            PolygonChangeElement.classList.add("red");
            PolygonChangeElement.innerHTML = formattedPolygonChange + "%";
        }
    } else {
        console.error('Polygon data not found');
    }




    const BCHData = data.find(crypto => crypto.id === 'bitcoin-cash');
    if (BCHData) {
        const BCHChange24h = BCHData.price_change_percentage_24h;
        const BCHChangeElement = document.getElementById('BCHTable');
        const formattedBCHChange = (BCHChange24h !== null && BCHChange24h !== undefined) ? BCHChange24h.toFixed(2) : 'N/A';
        if (BCHChange24h > 0){
            BCHChangeElement.classList.add("green");
            BCHChangeElement.innerHTML = "+" + formattedBCHChange + "%";
        }
        else if (BCHChange24h === 0) {
            BCHChangeElement.classList.add("grey");
            BCHChangeElement.innerHTML = formattedBCHChange + "%";
        }
        else {
            BCHChangeElement.classList.add("red");
            BCHChangeElement.innerHTML = formattedBCHChange + "%";
        }
    } else {
        console.error('Bitcoin cash data not found');
    }




    const BittensorData = data.find(crypto => crypto.id === 'bittensor');
    if (BittensorData) {
        const BittensorChange24h = BittensorData.price_change_percentage_24h;
        const BittensorChangeElement = document.getElementById('TAOTable');
        const formattedBittensorChange = (BittensorChange24h !== null && BittensorChange24h !== undefined) ? BittensorChange24h.toFixed(2) : 'N/A';
        if (BittensorChange24h > 0){
            BittensorChangeElement.classList.add("green");
            BittensorChangeElement.innerHTML = "+" + formattedBittensorChange + "%";
        }
        else if (BittensorChange24h === 0) {
            BittensorChangeElement.classList.add("grey");
            BittensorChangeElement.innerHTML = formattedBittensorChange + "%";
        }
        else {
            BittensorChangeElement.classList.add("red");
            BittensorChangeElement.innerHTML = formattedBittensorChange + "%";
        }
    } else {
        console.error('Bittensor cash data not found');
    }
}

getCryptoData();











