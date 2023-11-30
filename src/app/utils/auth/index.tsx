import jwtDecode, { JwtPayload } from 'jwt-decode';

const TOKEN_KEY = 'm_t_k';

class AuthUtils {
	getSessionToken(): string | null {
		let token = sessionStorage.getItem(TOKEN_KEY);
		return token ? token : null;
	}

	setSessionToken(token?: string): void {
		if (token) {
			sessionStorage.setItem(TOKEN_KEY, token);
		} else {
			sessionStorage.removeItem(TOKEN_KEY);
		}
	}

	setCookieToken(token?: string): void {
		if (token) {
		}
	}

	isAuthenticated(): boolean {
		const token = this.getSessionToken();

		if (!token) {
			return false;
		}

		const decoded: JwtPayload = jwtDecode(token);
		const currentTime = Date.now() / 1000;

		if (decoded.exp! < currentTime) {
			return false;
		} else {
			return true;
		}
	}
}

const authUtils = new AuthUtils();

export default authUtils;
