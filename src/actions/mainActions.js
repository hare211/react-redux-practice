// Controller 저장 -> 메서드 -> 구분해서 처리...

/*
    Action: 데이터 CRUD -> 서버 연결
        1) 어떤 기능이 있는지 설계
            types.js
            export const AA = 'AA' -> 내부 프로토콜
            -> public final static int LOGIN = 100
        2) Reducer: 데이터를 어떤 변수에 저장해 둘지 설정
            자동으로 store 에 전송
        3) component 는 store 에 있는 데이터를 읽어서 출력

        실행 순서
                            요청
        React(사용자 화면)   =========================
        component 단위      dispatch(action 함수 호출)    --- Reducer --- store
                                                                         |
                                                                       React 에서 읽기
            view                                            controller   model

            React Router                                Spring MVC
            <Route path="/" element={<Home />} />       @RequestMapping("/")
            <Home />                                    View 역할(JSP, Thymeleaf)
            Route                                       DispatchServlet 역할
            path="/"                                    URL 매핑(@RequestMapping)
            element={<Comp />}                          미리 렌더링할 View 객체 전달
            useNavigate()                               return "redirect:/path"
            useParams()                                 @PathVariable
            useLocation()                               HttpServletRequest.getRequestURI()
            useSearchParams()                           @RequestParam, request.getParameter()

            예시
            React
                <Route path="/user/:id" element={<UserDetail />} />
            Spring
                @GetMapping("/user/{id}") @PathVariable Long id
 */
import axios from "axios";
import {FETCH_MAIN_DATA} from "./types";

export const fetchMainData = () => async (dispatch) => {
    // 서버에서 데이터 받아 reducer 로 전송
    try {
        /*
        axios.get('http://localhost/main_react').then(res => {
            const action = {
                type: 'FETCH_MAIN_DATA',
                payload: res.data,
            }
            dispatch(action);
        })
         */
        const res = await axios.get('http://localhost/main-react');
        dispatch({ // dispatch -> Redux 에서 action 을 store 로 전달하는 함수
            type: FETCH_MAIN_DATA,
            payload: res.data,
        });
        /*
            dispatch(action) 을 호출하면 해당 action 객체가 reducer 로 전달되고,
            reducer 는 그 action 에 따라 새로운 state 를 반환함.
            type 이 'FETCH_MAIN_DATA' 인 action 이 reducer 로 전달되고,
            reducer 는 이걸 기반으로 상태를 업데이트.
         */
    } catch (Error) {
        console.error('err:', Error);
    }
}