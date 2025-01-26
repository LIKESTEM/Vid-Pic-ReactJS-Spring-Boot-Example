package com.thabiso.Vid_Pic_Bac.model;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	private User user;

	public UserPrincipal(User user) {
this.user=user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// Map roles from the user to GrantedAuthority objects
		return user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName())) // Assuming Role has a getName() method
				.collect(Collectors.toSet());
	}

	@Override
	public String getPassword() {
		
		return user.getPassword();
	}

	@Override
	public String getUsername() {
	
		return user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	

	@Override
	public boolean isEnabled() {
		return true;
	}

}
