export function getIconTableStyle() {
        return /*css*/`
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .iconTableTitle {
            text-align:center;
            margin-bottom: 10px;
            text-transform: uppercase;

        }

        .container {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }
        
        .content {

        
            display: flex;
            flex-direction: column;
            width: 70%;
        }
        
        .icon {
            display: grid;
            place-content: center;
            width: 30%;
            font-size: 50px;
        }
        `
}