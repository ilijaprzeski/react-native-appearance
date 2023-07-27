import _extends from"@babel/runtime/helpers/extends";var _jsxFileName="/Volumes/Workspace/BOOKBOTTLES/Github/react-native-appearance/src/NativeAppearance.web.tsx";import*as React from'react';import{View}from'react-native';import SyntheticPlatformEmitter from'./web/SyntheticPlatformEmitter';function getQuery(){if(typeof window==='undefined'||!window.matchMedia)return null;return window.matchMedia('(prefers-color-scheme: dark)');}function isMediaQueryList(query){return query&&query.addListener&&query.removeListener&&typeof query.matches==='boolean';}export var NativeAppearance={get name(){return'NativeAppearance';},get initialPreferences(){var query=getQuery();if(isMediaQueryList(query)){return{colorScheme:query.matches?'dark':'light'};}return{colorScheme:'no-preference'};}};export function NativeAppearanceProvider(props){React.useEffect(function(){var query=getQuery();function listener(_ref){var matches=_ref.matches;var colorScheme=matches?'dark':'light';SyntheticPlatformEmitter.emit('appearanceChanged',{colorScheme:colorScheme});}if(query)query.addListener(listener);return function(){if(query){query.removeListener(listener);}};},[]);return React.createElement(View,_extends({style:{flex:1}},props,{__source:{fileName:_jsxFileName,lineNumber:51}}));};
//# sourceMappingURL=NativeAppearance.web.js.map