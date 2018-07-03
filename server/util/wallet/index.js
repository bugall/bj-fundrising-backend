import request from 'request'
import config from '../../../config'
import { PrivateKey } from 'idacjs'
import Promise from 'bluebird'

class Wallet {
    constructor() { }

    create_account(account) {
        const salt = account + 'salt';
        const ownerKey = PrivateKey.fromSeed(account  + 'owner' + salt).toPublicKey().toPublicKeyString();
        const activeKey = PrivateKey.fromSeed(account + 'active' + salt).toPublicKey().toPublicKeyString();
        
        const params= {
            account: {
                name: account,
                owner_key: ownerKey,
                active_key: activeKey,
                memo_key: activeKey,
                refcode: null,
                referrer: null
            }
        }
        return new Promise((resolve, reject) => {
            request.post({
                url: config.wallet.faucet.register,
                form: params,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }, (err, res, body) => {
                if (err) reject(err)
                if (Number(res.statusCode) !== 422) {
                    resolve(JSON.parse(body).account)
                }
            })
        })
    }
}