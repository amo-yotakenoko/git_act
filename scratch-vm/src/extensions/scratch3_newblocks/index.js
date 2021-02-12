const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const virtualrobot_send = require('../../util/virtualrobot_send');

class Scratch3NewBlocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'newblocks',
            name: 'New Blocks',
            blocks: [
                {
                    opcode: 'set',
                    blockType: BlockType.COMMAND,
                    text: 'Key:[KEY]=[VALUE]',
                    arguments: {
                        KEY: {
                            type: ArgumentType.STRING,
                            defaultValue: "A"
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: "0"
                        }
                    }
                },
                {
                    opcode: 'get',
                    blockType: BlockType.REPORTER,
                    text: 'Key:[KEY]',
                    arguments: {
                        KEY: {
                            type: ArgumentType.STRING,
                            defaultValue: "sensor"
                        }
                    }
                },
                {
                    opcode: 'hat',
                    blockType: BlockType.HAT,
                    text: 'Key:[KEY]==[VALUE]',
                    arguments: {
                        KEY: {
                            type: ArgumentType.STRING,
                            defaultValue: "sensor"
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: "1"
                        }
                    }
                }
            ],
            menus: {
            }
        };
    }

    set(args) {

        if (sig[args.KEY]!=args.VALUE) {
            
        
            set(Cast.toString(args.KEY), Cast.toString(args.VALUE));
            sig[args.KEY] =args.VALUE;
        }

    }
    get(args) {

        return Cast.toString(sig[args.KEY]);
        //  return Cast.toString(sig[args.KEY]);
    }
    hat(args) {

        return sig[args.KEY] == args.VALUE;
    }


}



module.exports = Scratch3NewBlocks;