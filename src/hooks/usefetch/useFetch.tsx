import useAsync from '../useAsync/useAsync';

export default function useFetch(
  url: string,
  RequestInit: RequestInit | undefined,
  dependancies: React.DependencyList
):ReturnType<typeof useAsync > {
  return useAsync(() => {
  
    return fetch(url, RequestInit)
      .then((res) => {
        return res.json();
      })
      .catch((e) => {
        return new Promise((resolve,reject) => reject(e));
      });
  
  }, dependancies);
}