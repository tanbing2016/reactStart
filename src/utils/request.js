// import fetch from 'dva/fetch';
import { notification } from 'antd';

function buildParams(obj) {
    if (!obj) {
        return ''
    }
    const params = []
    for (const key of Object.keys(obj)) {
        const value = obj[key] === undefined ? '' : obj[key]
        params.push(`${key}=${encodeURIComponent(value)}`)
    }
    const arg = params.join('&')
    return arg
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    notification.error({
        message: `请求错误 ${response.status}: ${response.url}`,
        description: response.statusText,
    });
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    const defaultOptions = {
        credentials: 'include',
    };
    const newOptions = { ...defaultOptions, ...options, method: options.method || 'POST'};
    if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
        newOptions.headers = {
            Accept: 'application/json',
            // 'Content-Type': 'application/json; charset=utf-8',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            ...newOptions.headers,
        };
        newOptions.body = buildParams(newOptions.body);
    }

    return fetch(url, newOptions)
        .then(checkStatus)
        .then(response => response.json())
        .catch((error) => {
            if (error.code) {
                notification.error({
                    message: error.name,
                    description: error.message,
                });
            }
            // if ('stack' in error && 'message' in error) {
            //     notification.error({
            //         message: `请求错误: ${url}`,
            //         description: '请重新登录！',
            //     });
            // }
            return error;
        }
    );
}