/**
 * Created by wangxuquan on 2017/8/10.
 * 
 *  Reducers
 */
import { INIT_DOCS, SEARCH_DOCS_SUCCESS} from '../actions';
import docsJson from '../docs.json';

// 初始化的数据的  store
export function initDocs(state = docsJson, action) {
    switch (action.type) {
      default:
        return state
    }
}

// 格式化搜索结果
function formatDocs(data){
  let results = {}; 
  data.forEach((elem) => {
    !Object.prototype.hasOwnProperty.call(results, elem.type) && (results[elem.type] = [{...elem}]);
    results[elem.type].push({...elem});
  });
  return results;
}

// 搜索结果的  store
export function resultDocs(state = formatDocs(docsJson.docs), action) {
  switch (action.type) {
      case INIT_DOCS:
        return formatDocs(action.resultDocs);
      case SEARCH_DOCS_SUCCESS:
        return formatDocs(action.resultDocs);  
      default:
        return state
  }
}