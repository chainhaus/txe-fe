export const Header = () => {
	
  return (
    <div id="kt_app_header" className="app-header" >
					<div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
						<div className="app-header-logo d-flex align-items-center me-lg-9">
							<div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n2 me-2 d-flex d-lg-none" id="kt_app_header_menu_toggle">
								<i className="ki-outline ki-abstract-14 fs-1"></i>
							</div>
							<a href="../../demo44/dist/index.html">
								<img alt="Logo" src="assets/media/logos/demo44.svg" className="h-25px theme-light-show" />
								<img alt="Logo" src="assets/media/logos/demo44-dark.svg" className="h-25px theme-dark-show" />
							</a>
						</div>
						<div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
							<div className="d-flex align-items-stretch" id="kt_app_header_menu_wrapper">
								<div className="app-header-menu app-header-mobile-drawer align-items-stretch" >
									<div className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-dark menu-arrow-gray-400 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0" id="#kt_app_header_menu" data-kt-menu="true">
										<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
											<span className="menu-link">
												<span className="menu-title">Home</span>
												<span className="menu-arrow d-lg-none"></span>
											</span>
											<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
												<div className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible" data-kt-menu-dismiss="true">
													<div className="row">
														<div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
															<div className="row">
																<div className="col-lg-6 mb-3">
																	<div className="menu-item p-0 m-0">
																		<a href="../../demo44/dist/index.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-element-11 text-primary fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Default</span>
																				<span className="fs-7 fw-semibold text-muted">Reports & statistics</span>
																			</span>
																		</a>
																	</div>
																</div>
																<div className="col-lg-6 mb-3">
																	<div className="menu-item p-0 m-0">
																		<a href="../../demo44/dist/dashboards/ecommerce.html" className="menu-link active">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-basket text-danger fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">eCommerce</span>
																				<span className="fs-7 fw-semibold text-muted">Sales reports</span>
																			</span>
																		</a>
																	</div>
																</div>
																<div className="col-lg-6 mb-3">
																	<div className="menu-item p-0 m-0">
																		<a href="../../demo44/dist/dashboards/projects.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-abstract-44 text-info fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Projects</span>
																				<span className="fs-7 fw-semibold text-muted">Tasts, graphs & charts</span>
																			</span>
																		</a>
																	</div>
																</div>
																<div className="col-lg-6 mb-3">
																	<div className="menu-item p-0 m-0">
																		<a href="../../demo44/dist/dashboards/online-courses.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-color-swatch text-success fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Online Courses</span>
																				<span className="fs-7 fw-semibold text-muted">Student progress</span>
																			</span>
																		</a>
																	</div>
																</div>
																
																
																<div className="col-lg-6 mb-3">
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/dashboards/marketing.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-chart-simple text-dark fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Marketing</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
																		</a>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-6 mb-3">
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/dashboards/bidding.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-switch text-warning fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Bidding</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
																		</a>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-6 mb-3">
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/dashboards/pos.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-abstract-42 text-danger fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">POS System</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
																		</a>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-6 mb-3">
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/dashboards/call-center.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-call text-primary fs-1"></i>
																			</span>
																			<span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Call Center</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
																		</a>
																		
																	</div>
																	
																</div>
																
															</div>
															
															<div className="separator separator-dashed mx-5 my-5"></div>
															
															<div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
																<div className="d-flex flex-column me-5">
																	<div className="fs-6 fw-bold text-gray-800">Landing Page Template</div>
																	<div className="fs-7 fw-semibold text-muted">Onpe page landing template with pricing & others</div>
																</div>
																<a href="../../demo44/dist/landing.html" className="btn btn-sm btn-primary fw-bold">Explore</a>
															</div>
															
														</div>
														
														
														<div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
															
															<h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">More Dashboards</h4>
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/logistics.html" className="menu-link py-2">
																	<span className="menu-title">Logistics</span>
																</a>
																
															</div>
															
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/website-analytics.html" className="menu-link py-2">
																	<span className="menu-title">Website Analytics</span>
																</a>
																
															</div>
															
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/finance-performance.html" className="menu-link py-2">
																	<span className="menu-title">Finance Performance</span>
																</a>
																
															</div>
															
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/store-analytics.html" className="menu-link py-2">
																	<span className="menu-title">Store Analytics</span>
																</a>
																
															</div>
															
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/social.html" className="menu-link py-2">
																	<span className="menu-title">Social</span>
																</a>
																
															</div>
															
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/delivery.html" className="menu-link py-2">
																	<span className="menu-title">Delivery</span>
																</a>
																
															</div>
															
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/crypto.html" className="menu-link py-2">
																	<span className="menu-title">Crypto</span>
																</a>
																
															</div>
															
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/school.html" className="menu-link py-2">
																	<span className="menu-title">School</span>
																</a>
																
															</div>
															
															
															<div className="menu-item p-0 m-0">
																
																<a href="../../demo44/dist/dashboards/podcast.html" className="menu-link py-2">
																	<span className="menu-title">Podcast</span>
																</a>
																
															</div>
															
														</div>
														
													</div>
													
												</div>
											</div>
										</div>
										
										
										<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
											
											<span className="menu-link">
												<span className="menu-title">Pages</span>
												<span className="menu-arrow d-lg-none"></span>
											</span>
											
											
											<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
												
												<div className="menu-active-bg px-4 px-lg-0">
													
													<div className="d-flex w-100 overflow-auto">
														<ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
															
															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 active text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">General</a>
															</li>
															
															
															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Account</a>
															</li>
															
															
															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
															</li>
															
															
															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
															</li>
															
															
															<li className="nav-item mx-lg-1">
																<a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_widgets">Widgets</a>
															</li>
															
														</ul>
													</div>
													
													
													<div className="tab-content py-4 py-lg-8 px-lg-7">
														
														<div className="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages">
															
															<div className="row">
																
																<div className="col-lg-8">
																	
																	<div className="row">
																		
																		<div className="col-lg-3 mb-6 mb-lg-0">
																			
																			<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">User Profile</h4>
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/pages/user-profile/overview.html" className="menu-link">
																					<span className="menu-title">Overview</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/pages/user-profile/projects.html" className="menu-link">
																					<span className="menu-title">Projects</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/pages/user-profile/campaigns.html" className="menu-link">
																					<span className="menu-title">Campaigns</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/pages/user-profile/documents.html" className="menu-link">
																					<span className="menu-title">Documents</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/pages/user-profile/followers.html" className="menu-link">
																					<span className="menu-title">Followers</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/pages/user-profile/activity.html" className="menu-link">
																					<span className="menu-title">Activity</span>
																				</a>
																				
																			</div>
																			
																		</div>
																		
																		
																		<div className="col-lg-3 mb-6 mb-lg-0">
																			
																			<div className="mb-6">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/about.html" className="menu-link">
																						<span className="menu-title">About</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/team.html" className="menu-link">
																						<span className="menu-title">Our Team</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/contact.html" className="menu-link">
																						<span className="menu-title">Contact Us</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/licenses.html" className="menu-link">
																						<span className="menu-title">Licenses</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/sitemap.html" className="menu-link">
																						<span className="menu-title">Sitemap</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																			
																			<div className="mb-0">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Careers</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/careers/list.html" className="menu-link">
																						<span className="menu-title">Careers List</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/careers/apply.html" className="menu-link">
																						<span className="menu-title">Careers Apply</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																		</div>
																		
																		
																		<div className="col-lg-3 mb-6 mb-lg-0">
																			
																			<div className="mb-6">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">FAQ</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/faq/classic.html" className="menu-link">
																						<span className="menu-title">FAQ Classic</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/faq/extended.html" className="menu-link">
																						<span className="menu-title">FAQ Extended</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																			
																			<div className="mb-6">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Blog</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/blog/home.html" className="menu-link">
																						<span className="menu-title">Blog Home</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/blog/post.html" className="menu-link">
																						<span className="menu-title">Blog Post</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																			
																			<div className="mb-0">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Pricing</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/pricing.html" className="menu-link">
																						<span className="menu-title">Column Pricing</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/pricing/table.html" className="menu-link">
																						<span className="menu-title">Table Pricing</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																		</div>
																		
																		
																		<div className="col-lg-3 mb-6 mb-lg-0">
																			
																			<div className="mb-0">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Social</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/social/feeds.html" className="menu-link">
																						<span className="menu-title">Feeds</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/social/activity.html" className="menu-link">
																						<span className="menu-title">Activty</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/social/followers.html" className="menu-link">
																						<span className="menu-title">Followers</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/pages/social/settings.html" className="menu-link">
																						<span className="menu-title">Settings</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-4">
																	<img src="assets/media/stock/600x600/img-82.jpg" className="rounded mw-100" alt="" />
																</div>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane w-lg-600px" id="kt_app_header_menu_pages_account">
															
															<div className="row">
																
																<div className="col-lg-5 mb-6 mb-lg-0">
																	
																	<div className="row">
																		
																		<div className="col-lg-6">
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/overview.html" className="menu-link">
																					<span className="menu-title">Overview</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/settings.html" className="menu-link">
																					<span className="menu-title">Settings</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/security.html" className="menu-link">
																					<span className="menu-title">Security</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/activity.html" className="menu-link">
																					<span className="menu-title">Activity</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/billing.html" className="menu-link">
																					<span className="menu-title">Billing</span>
																				</a>
																				
																			</div>
																			
																		</div>
																		
																		
																		<div className="col-lg-6">
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/statements.html" className="menu-link">
																					<span className="menu-title">Statements</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/referrals.html" className="menu-link">
																					<span className="menu-title">Referrals</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/api-keys.html" className="menu-link">
																					<span className="menu-title">API Keys</span>
																				</a>
																				
																			</div>
																			
																			
																			<div className="menu-item p-0 m-0">
																				
																				<a href="../../demo44/dist/account/logs.html" className="menu-link">
																					<span className="menu-title">Logs</span>
																				</a>
																				
																			</div>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-7">
																	<img src="assets/media/stock/900x600/46.jpg" className="rounded mw-100" alt="" />
																</div>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication">
															
															<div className="row">
																
																<div className="col-lg-3 mb-6 mb-lg-0">
																	
																	<div className="mb-6">
																		
																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/corporate/sign-in.html" className="menu-link">
																				<span className="menu-title">Sign-In</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/corporate/sign-up.html" className="menu-link">
																				<span className="menu-title">Sign-Up</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/corporate/two-factor.html" className="menu-link">
																				<span className="menu-title">Two-Factor</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/corporate/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/corporate/new-password.html" className="menu-link">
																				<span className="menu-title">New Password</span>
																			</a>
																			
																		</div>
																		
																	</div>
																	
																	
																	<div className="mb-0">
																		
																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/overlay/sign-in.html" className="menu-link">
																				<span className="menu-title">Sign-In</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/overlay/sign-up.html" className="menu-link">
																				<span className="menu-title">Sign-Up</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/overlay/two-factor.html" className="menu-link">
																				<span className="menu-title">Two-Factor</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/overlay/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/overlay/new-password.html" className="menu-link">
																				<span className="menu-title">New Password</span>
																			</a>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-3 mb-6 mb-lg-0">
																	
																	<div className="mb-6">
																		
																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/creative/sign-in.html" className="menu-link">
																				<span className="menu-title">Sign-in</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/creative/sign-up.html" className="menu-link">
																				<span className="menu-title">Sign-up</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/creative/two-factor.html" className="menu-link">
																				<span className="menu-title">Two-Factor</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/creative/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/creative/new-password.html" className="menu-link">
																				<span className="menu-title">New Password</span>
																			</a>
																			
																		</div>
																		
																	</div>
																	
																	
																	<div className="mb-6">
																		
																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/fancy/sign-in.html" className="menu-link">
																				<span className="menu-title">Sign-In</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/fancy/sign-up.html" className="menu-link">
																				<span className="menu-title">Sign-Up</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/fancy/two-factor.html" className="menu-link">
																				<span className="menu-title">Two-Factor</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/fancy/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/layouts/fancy/new-password.html" className="menu-link">
																				<span className="menu-title">New Password</span>
																			</a>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-3 mb-6 mb-lg-0">
																	
																	<div className="mb-0">
																		
																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/extended/multi-steps-sign-up.html" className="menu-link">
																				<span className="menu-title">Multi-Steps Sign-Up</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/general/welcome.html" className="menu-link">
																				<span className="menu-title">Welcome Message</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/general/verify-email.html" className="menu-link">
																				<span className="menu-title">Verify Email</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/general/coming-soon.html" className="menu-link">
																				<span className="menu-title">Coming Soon</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/general/password-confirmation.html" className="menu-link">
																				<span className="menu-title">Password Confirmation</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/general/account-deactivated.html" className="menu-link">
																				<span className="menu-title">Account Deactivation</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/general/error-404.html" className="menu-link">
																				<span className="menu-title">Error 404</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/general/error-500.html" className="menu-link">
																				<span className="menu-title">Error 500</span>
																			</a>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-3 mb-6 mb-lg-0">
																	
																	<div className="mb-0">
																		
																		<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/email/welcome-message.html" className="menu-link">
																				<span className="menu-title">Welcome Message</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/email/reset-password.html" className="menu-link">
																				<span className="menu-title">Reset Password</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/email/subscription-confirmed.html" className="menu-link">
																				<span className="menu-title">Subscription Confirmed</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/email/card-declined.html" className="menu-link">
																				<span className="menu-title">Credit Card Declined</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/email/promo-1.html" className="menu-link">
																				<span className="menu-title">Promo 1</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/email/promo-2.html" className="menu-link">
																				<span className="menu-title">Promo 2</span>
																			</a>
																			
																		</div>
																		
																		
																		<div className="menu-item p-0 m-0">
																			
																			<a href="../../demo44/dist/authentication/email/promo-3.html" className="menu-link">
																				<span className="menu-title">Promo 3</span>
																			</a>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
															
															<div className="row">
																
																<div className="col-lg-7">
																	
																	<div className="row">
																		
																		<div className="col-lg-4 mb-6 mb-lg-0">
																			
																			<div className="mb-0">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/general/invite-friends.html" className="menu-link">
																						<span className="menu-title">Invite Friends</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/general/view-users.html" className="menu-link">
																						<span className="menu-title">View Users</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/general/select-users.html" className="menu-link">
																						<span className="menu-title">Select Users</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/general/upgrade-plan.html" className="menu-link">
																						<span className="menu-title">Upgrade Plan</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/general/share-earn.html" className="menu-link">
																						<span className="menu-title">Share & Earn</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/forms/new-target.html" className="menu-link">
																						<span className="menu-title">New Target</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/forms/new-card.html" className="menu-link">
																						<span className="menu-title">New Card</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/forms/new-address.html" className="menu-link">
																						<span className="menu-title">New Address</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/forms/create-api-key.html" className="menu-link">
																						<span className="menu-title">Create API Key</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/forms/bidding.html" className="menu-link">
																						<span className="menu-title">Bidding</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																		</div>
																		
																		
																		<div className="col-lg-4 mb-6 mb-lg-0">
																			
																			<div className="mb-6">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/wizards/create-app.html" className="menu-link">
																						<span className="menu-title">Create App</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/wizards/create-campaign.html" className="menu-link">
																						<span className="menu-title">Create Campaign</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/wizards/create-account.html" className="menu-link">
																						<span className="menu-title">Create Business Acc</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/wizards/create-project.html" className="menu-link">
																						<span className="menu-title">Create Project</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
																						<span className="menu-title">Top Up Wallet</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/wizards/offer-a-deal.html" className="menu-link">
																						<span className="menu-title">Offer a Deal</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/wizards/two-factor-authentication.html" className="menu-link">
																						<span className="menu-title">Two Factor Auth</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																			
																			<div className="mb-0">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/search/horizontal.html" className="menu-link">
																						<span className="menu-title">Horizontal</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/search/vertical.html" className="menu-link">
																						<span className="menu-title">Vertical</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/search/users.html" className="menu-link">
																						<span className="menu-title">Users</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/search/select-location.html" className="menu-link">
																						<span className="menu-title">Select Location</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																		</div>
																		
																		
																		<div className="col-lg-4 mb-6 mb-lg-0">
																			
																			<div className="mb-0">
																				
																				<h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/wizards/horizontal.html" className="menu-link">
																						<span className="menu-title">Horizontal</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/wizards/vertical.html" className="menu-link">
																						<span className="menu-title">Vertical</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/wizards/two-factor-authentication.html" className="menu-link">
																						<span className="menu-title">Two Factor Auth</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/wizards/create-app.html" className="menu-link">
																						<span className="menu-title">Create App</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/wizards/create-campaign.html" className="menu-link">
																						<span className="menu-title">Create Campaign</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/wizards/create-account.html" className="menu-link">
																						<span className="menu-title">Create Account</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/wizards/create-project.html" className="menu-link">
																						<span className="menu-title">Create Project</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
																						<span className="menu-title">Top Up Wallet</span>
																					</a>
																					
																				</div>
																				
																				
																				<div className="menu-item p-0 m-0">
																					
																					<a href="../../demo44/dist/utilities/wizards/offer-a-deal.html" className="menu-link">
																						<span className="menu-title">Offer a Deal</span>
																					</a>
																					
																				</div>
																				
																			</div>
																			
																		</div>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-5 pe-lg-5">
																	<img src="assets/media/stock/600x600/img-84.jpg" className="rounded mw-100" alt="" />
																</div>
																
															</div>
															
														</div>
														
														
														<div className="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets">
															
															<div className="row">
																
																<div className="col-lg-4 mb-6 mb-lg-0">
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/widgets/lists.html" className="menu-link">
																			<span className="menu-title">Lists</span>
																		</a>
																		
																	</div>
																	
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/widgets/statistics.html" className="menu-link">
																			<span className="menu-title">Statistics</span>
																		</a>
																		
																	</div>
																	
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/widgets/charts.html" className="menu-link">
																			<span className="menu-title">Charts</span>
																		</a>
																		
																	</div>
																	
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/widgets/mixed.html" className="menu-link">
																			<span className="menu-title">Mixed</span>
																		</a>
																		
																	</div>
																	
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/widgets/tables.html" className="menu-link">
																			<span className="menu-title">Tables</span>
																		</a>
																		
																	</div>
																	
																	
																	<div className="menu-item p-0 m-0">
																		
																		<a href="../../demo44/dist/widgets/feeds.html" className="menu-link">
																			<span className="menu-title">Feeds</span>
																		</a>
																		
																	</div>
																	
																</div>
																
																
																<div className="col-lg-8">
																	<img src="assets/media/stock/900x600/44.jpg" className="rounded mw-100" alt="" />
																</div>
																
															</div>
															
														</div>
														
													</div>
												</div>
											</div>
											
										</div>
										
										
										<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
											
											<span className="menu-link">
												<span className="menu-title">Apps</span>
												<span className="menu-arrow d-lg-none"></span>
											</span>
											
											
											<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-rocket fs-2"></i>
														</span>
														<span className="menu-title">Projects</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/projects/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">My Projects</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/projects/project.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View Project</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/projects/targets.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Targets</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/projects/budget.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Budget</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/projects/users.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Users</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/projects/files.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Files</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/projects/activity.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Activity</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/projects/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Settings</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-handcart fs-2"></i>
														</span>
														<span className="menu-title">eCommerce</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Catalog</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/catalog/products.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Products</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/catalog/categories.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Categories</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/catalog/add-product.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Add Product</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/catalog/edit-product.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Edit Product</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/catalog/add-category.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Add Category</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/catalog/edit-category.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Edit Category</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Sales</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-accordion">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/sales/listing.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Orders Listing</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/sales/details.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Order Details</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/sales/add-order.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Add Order</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/sales/edit-order.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Edit Order</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customers</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-accordion">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/customers/listing.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Customers Listing</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/customers/details.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Customers Details</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Reports</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-accordion">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/reports/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Products Viewed</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/reports/sales.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Sales</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/reports/returns.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Returns</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/reports/customer-orders.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Customer Orders</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/ecommerce/reports/shipping.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Shipping</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/ecommerce/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Settings</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-chart fs-2"></i>
														</span>
														<span className="menu-title">Support Center</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/support-center/overview.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Overview</span>
															</a>
															
														</div>
														
														
														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tickets</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/support-center/tickets/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Ticket List</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/support-center/tickets/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Ticket View</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tutorials</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/support-center/tutorials/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Tutorials List</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/support-center/tutorials/post.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Tutorials Post</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/support-center/faq.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">FAQ</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/support-center/licenses.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Licenses</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/support-center/contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Contact Us</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-shield-tick fs-2"></i>
														</span>
														<span className="menu-title">User Management</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Users</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/user-management/users/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Users List</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/user-management/users/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">View User</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Roles</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/user-management/roles/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Roles List</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/user-management/roles/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">View Roles</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/user-management/permissions.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Permissions</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-phone fs-2"></i>
														</span>
														<span className="menu-title">Contacts</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/contacts/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Getting Started</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/contacts/add-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Add Contact</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/contacts/edit-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Edit Contact</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/contacts/view-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View Contact</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-basket fs-2"></i>
														</span>
														<span className="menu-title">Subscriptions</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/subscriptions/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Getting Started</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/subscriptions/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Subscription List</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/subscriptions/add.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Add Subscription</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/subscriptions/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View Subscription</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-briefcase fs-2"></i>
														</span>
														<span className="menu-title">Customers</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/customers/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Getting Started</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/customers/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customer Listing</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/customers/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customer Details</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-credit-cart fs-2"></i>
														</span>
														<span className="menu-title">Invoice Management</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
															
															<span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Profile</span>
																<span className="menu-arrow"></span>
															</span>
															
															
															<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/invoices/view/invoice-1.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Invoice 1</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/invoices/view/invoice-2.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Invoice 2</span>
																	</a>
																	
																</div>
																
																
																<div className="menu-item">
																	
																	<a className="menu-link" href="../../demo44/dist/apps/invoices/view/invoice-3.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
																		<span className="menu-title">Invoice 3</span>
																	</a>
																	
																</div>
																
															</div>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/invoices/create.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Create Invoice</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-file-added fs-2"></i>
														</span>
														<span className="menu-title">File Manager</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/file-manager/folders.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Folders</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/file-manager/files.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Files</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/file-manager/blank.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Blank Directory</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/file-manager/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Settings</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-sms fs-2"></i>
														</span>
														<span className="menu-title">Inbox</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/inbox/listing.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Messages</span>
																<span className="menu-badge">
																	<span className="badge badge-light-success">3</span>
																</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/inbox/compose.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Compose</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/inbox/reply.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">View & Reply</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
													
													<span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-message-text-2 fs-2"></i>
														</span>
														<span className="menu-title">Chat</span>
														<span className="menu-arrow"></span>
													</span>
													
													
													<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/chat/private.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Private Chat</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/chat/group.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Group Chat</span>
															</a>
															
														</div>
														
														
														<div className="menu-item">
															
															<a className="menu-link" href="../../demo44/dist/apps/chat/drawer.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Drawer Chat</span>
															</a>
															
														</div>
														
													</div>
													
												</div>
												
												
												<div className="menu-item">
													
													<a className="menu-link" href="../../demo44/dist/apps/calendar.html">
														<span className="menu-icon">
															<i className="ki-outline ki-calendar-8 fs-2"></i>
														</span>
														<span className="menu-title">Calendar</span>
													</a>
													
												</div>
												
											</div>
											
										</div>
										
										
										<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
											
											<span className="menu-link">
												<span className="menu-title">Help</span>
												<span className="menu-arrow d-lg-none"></span>
											</span>
											
											
											<div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
												
												<div className="menu-item">
													
													<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
														<span className="menu-icon">
															<i className="ki-outline ki-rocket fs-2"></i>
														</span>
														<span className="menu-title">Components</span>
													</a>
													
												</div>
												
												
												<div className="menu-item">
													
													<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
														<span className="menu-icon">
															<i className="ki-outline ki-abstract-26 fs-2"></i>
														</span>
														<span className="menu-title">Documentation</span>
													</a>
													
												</div>
												
												
												<div className="menu-item">
													
													<a className="menu-link" href="https://preview.keenthemes.com/metronic8/demo44/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
														<span className="menu-icon">
															<i className="ki-outline ki-switch fs-2"></i>
														</span>
														<span className="menu-title">Layout Builder</span>
													</a>
													
												</div>
												
												
												<div className="menu-item">
													
													<a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
														<span className="menu-icon">
															<i className="ki-outline ki-code fs-2"></i>
														</span>
														<span className="menu-title">Changelog v8.2.0</span>
													</a>
													
												</div>
												
											</div>
											
										</div>
										
									</div>
									
								</div>
								
							</div>
							
							
							<div className="app-navbar flex-shrink-0">
								
								<div className="app-navbar-item">
									<a href="#" className="btn btn-flex flex-center btn-sm fw-bold btn-dark py-3 w-40px h-40px w-md-auto" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
										<i className="ki-outline ki-verify d-inline-flex d-md-none fs-2 p-0 m-0"></i>
										<span className="d-none d-md-inline ps-lg-1">Upgrade Plan</span>
									</a>
								</div>
								
								
								<div className="app-navbar-item align-items-stretch ms-1 ms-lg-4">
									
									<div id="kt_header_search" className="header-search d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
										<div className="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
											<div className="btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px">
												<i className="ki-outline ki-magnifier fs-1"></i>
											</div>
										</div>
										
										<div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
											
											<div data-kt-search-element="wrapper">
												
												<form data-kt-search-element="form" className="w-100 position-relative mb-3">
													<i className="ki-outline ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0"></i>
													
													<input type="text" className="search-input form-control form-control-flush ps-10" name="search" value="" placeholder="Search..." data-kt-search-element="input" />
													<span className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
														<span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
													</span>
													<span className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
														<i className="ki-outline ki-cross fs-2 fs-lg-1 me-0"></i>
													</span>
													<div className="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
														<div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
															<i className="ki-outline ki-setting-2 fs-2"></i>
														</div>
														<div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
															<i className="ki-outline ki-down fs-2"></i>
														</div>
													</div>
												</form>
												
												
												<div className="separator border-gray-200 mb-6"></div>
												<div data-kt-search-element="results" className="d-none">
													<div className="scroll-y mh-200px mh-lg-350px">
														<h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															<div className="symbol symbol-40px me-4">
																<img src="assets/media/avatars/300-6.jpg" alt="" />
															</div>
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Karina Clark</span>
																<span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
															</div>
														</a>
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															<div className="symbol symbol-40px me-4">
																<img src="assets/media/avatars/300-2.jpg" alt="" />
															</div>
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Olivia Bold</span>
																<span className="fs-7 fw-semibold text-muted">Software Engineer</span>
															</div>
														</a>
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															<div className="symbol symbol-40px me-4">
																<img src="assets/media/avatars/300-9.jpg" alt="" />
															</div>
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Ana Clark</span>
																<span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
															</div>
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<img src="assets/media/avatars/300-14.jpg" alt="" />
															</div>
															
															
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Nick Pitola</span>
																<span className="fs-7 fw-semibold text-muted">Art Director</span>
															</div>
															
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<img src="assets/media/avatars/300-11.jpg" alt="" />
															</div>
															
															
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Edward Kulnic</span>
																<span className="fs-7 fw-semibold text-muted">System Administrator</span>
															</div>
															
														</a>
														
														
														<h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="" />
																</span>
															</div>
															
															
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Company Rbranding</span>
																<span className="fs-7 fw-semibold text-muted">UI Design</span>
															</div>
															
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
																</span>
															</div>
															
															
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Company Re-branding</span>
																<span className="fs-7 fw-semibold text-muted">Web Development</span>
															</div>
															
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
																</span>
															</div>
															
															
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Business Analytics App</span>
																<span className="fs-7 fw-semibold text-muted">Administration</span>
															</div>
															
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
																</span>
															</div>
															
															
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
																<span className="fs-7 fw-semibold text-muted">Marketing</span>
															</div>
															
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="" />
																</span>
															</div>
															
															
															<div className="d-flex flex-column justify-content-start fw-semibold">
																<span className="fs-6 fw-semibold">Tower Group Website</span>
																<span className="fs-7 fw-semibold text-muted">Google Adwords</span>
															</div>
															
														</a>
														
														
														<h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-notepad fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
																<span className="fs-7 fw-semibold text-muted">#45670</span>
															</div>
															
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-frame fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
																<span className="fs-7 fw-semibold text-muted">#45690</span>
															</div>
															
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-message-text-2 fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
																<span className="fs-7 fw-semibold text-muted">#21090</span>
															</div>
															
														</a>
														
														
														<a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-profile-circle fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
																<span className="fs-7 fw-semibold text-muted">#34560</span>
															</div>
															
														</a>
														
													</div>
												</div>
												<div className="mb-5" data-kt-search-element="main">
													<div className="d-flex flex-stack fw-semibold mb-4">
														<span className="text-muted fs-6 me-2">Recently Searched:</span>
													</div>
													
													<div className="scroll-y mh-200px mh-lg-325px">
														
														<div className="d-flex align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-laptop fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
																<span className="fs-7 text-muted fw-semibold">#45789</span>
															</div>
															
														</div>
														
														
														<div className="d-flex align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-chart-simple fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
																<span className="fs-7 text-muted fw-semibold">#84050</span>
															</div>
															
														</div>
														
														
														<div className="d-flex align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-chart fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
																<span className="fs-7 text-muted fw-semibold">#84250</span>
															</div>
															
														</div>
														
														
														<div className="d-flex align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-chart-line-down fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
																<span className="fs-7 text-muted fw-semibold">#67945</span>
															</div>
															
														</div>
														
														
														<div className="d-flex align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-sms fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
																<span className="fs-7 text-muted fw-semibold">#84250</span>
															</div>
															
														</div>
														
														
														<div className="d-flex align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-bank fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
																<span className="fs-7 text-muted fw-semibold">#45690</span>
															</div>
															
														</div>
														
														
														<div className="d-flex align-items-center mb-5">
															
															<div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-chart-line-down fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="d-flex flex-column">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
																<span className="fs-7 text-muted fw-semibold">#24005</span>
															</div>
															
														</div>
														
													</div>
													
												</div>
												<div data-kt-search-element="empty" className="text-center d-none">
													<div className="pt-10 pb-10">
														<i className="ki-outline ki-search-list fs-4x opacity-50"></i>
													</div>
													
													<div className="pb-15 fw-semibold">
														<h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
														<div className="text-muted fs-7">Please try again with a different query</div>
													</div>
												</div>
											</div>
											
											<form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
												
												<h3 className="fw-semibold text-dark mb-7">Advanced Search</h3>
												
												
												<div className="mb-5">
													<input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
												</div>
												
												
												<div className="mb-5">
													
													<div className="nav-group nav-group-fluid">
														
														<label>
															<input type="radio" className="btn-check" name="type" value="has" checked />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
														</label>
														
														
														<label>
															<input type="radio" className="btn-check" name="type" value="users" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
														</label>
														
														
														<label>
															<input type="radio" className="btn-check" name="type" value="orders" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
														</label>
														
														
														<label>
															<input type="radio" className="btn-check" name="type" value="projects" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
														</label>
														
													</div>
												</div>
												
												
												<div className="mb-5">
													<input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
												</div>
												
												
												<div className="mb-5">
													<input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
												</div>
												
												
												<div className="mb-5">
													
													<div className="nav-group nav-group-fluid">
														
														<label>
															<input type="radio" className="btn-check" name="attachment" value="has" checked />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
														</label>
														
														
														<label>
															<input type="radio" className="btn-check" name="attachment" value="any" />
															<span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
														</label>
														
													</div>
												</div>
												
												
												<div className="mb-5">
													<select name="timezone" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
														<option value="next">Within the next</option>
														<option value="last">Within the last</option>
														<option value="between">Between</option>
														<option value="on">On</option>
													</select>
												</div>
												
												
												<div className="row mb-8">
													
													<div className="col-6">
														<input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
													</div>
													
													
													<div className="col-6">
														<select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
															<option value="days">Days</option>
															<option value="weeks">Weeks</option>
															<option value="months">Months</option>
															<option value="years">Years</option>
														</select>
													</div>
												</div>
												
												<div className="d-flex justify-content-end">
													<button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
													<a href="../../demo44/dist/pages/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
												</div>
											</form>
											<form data-kt-search-element="preferences" className="pt-1 d-none">
												
												<h3 className="fw-semibold text-dark mb-7">Search Preferences</h3>
												
												
												<div className="pb-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
														<input className="form-check-input" type="checkbox" value="1" checked />
													</label>
												</div>
												
												
												<div className="py-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
														<input className="form-check-input" type="checkbox" value="1" checked />
													</label>
												</div>
												
												
												<div className="py-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
														<input className="form-check-input" type="checkbox" value="1" />
													</label>
												</div>
												
												
												<div className="py-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
														<input className="form-check-input" type="checkbox" value="1" checked />
													</label>
												</div>
												
												
												<div className="py-4 border-bottom">
													<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
														<span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
														<input className="form-check-input" type="checkbox" value="1" />
													</label>
												</div>
												
												<div className="d-flex justify-content-end pt-7">
													<button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
													<button type="submit" className="btn btn-sm fw-bold btn-primary">Save Changes</button>
												</div>
											</form>
										</div>
										
									</div>
								</div>
								<div className="app-navbar-item ms-1 ms-lg-4">
									<div className="btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px" id="kt_activities_toggle">
										<i className="ki-outline ki-abstract-42 fs-1"></i>
									</div>
								</div>
								<div className="app-navbar-item ms-1 ms-lg-4">
									<div className="btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<i className="ki-outline ki-calendar fs-1"></i>
									</div>
									
									<div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
										
										<div className="d-flex flex-column bgi-no-repeat rounded-top" style={{ backgroundImage: "url('assets/media/misc/menu-header-bg.jpg')"}}>
											
											<h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
											<span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
											
											<ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
												</li>
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
												</li>
												<li className="nav-item">
													<a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
												</li>
											</ul>
										</div>
										
										<div className="tab-content">
											<div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
												
												<div className="scroll-y mh-325px my-5 px-8">
													
													<div className="d-flex flex-stack py-4">
														<div className="d-flex align-items-center">
															
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-primary">
																	<i className="ki-outline ki-abstract-28 fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
																<div className="text-gray-400 fs-7">Phase 1 development</div>
															</div>
															
														</div>
														<span className="badge badge-light fs-8">1 hr</span>
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														<div className="d-flex align-items-center">
															
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-danger">
																	<i className="ki-outline ki-information fs-2 text-danger"></i>
																</span>
															</div>
															
															
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
																<div className="text-gray-400 fs-7">Confidential staff documents</div>
															</div>
															
														</div>
														<span className="badge badge-light fs-8">2 hrs</span>
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														<div className="d-flex align-items-center">
															
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-warning">
																	<i className="ki-outline ki-briefcase fs-2 text-warning"></i>
																</span>
															</div>
															
															
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
																<div className="text-gray-400 fs-7">Corporeate staff profiles</div>
															</div>
															
														</div>
														
														
														<span className="badge badge-light fs-8">5 hrs</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center">
															
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-success">
																	<i className="ki-outline ki-abstract-12 fs-2 text-success"></i>
																</span>
															</div>
															
															
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
																<div className="text-gray-400 fs-7">New frontend admin theme</div>
															</div>
															
														</div>
														
														
														<span className="badge badge-light fs-8">2 days</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center">
															
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-primary">
																	<i className="ki-outline ki-colors-square fs-2 text-primary"></i>
																</span>
															</div>
															
															
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
																<div className="text-gray-400 fs-7">Product launch status update</div>
															</div>
															
														</div>
														
														
														<span className="badge badge-light fs-8">21 Jan</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center">
															
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-info">
																	<i className="ki-outline ki-picture fs-2 text-info"></i>
																</span>
															</div>
															
															
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
																<div className="text-gray-400 fs-7">Collection of banner images</div>
															</div>
															
														</div>
														
														
														<span className="badge badge-light fs-8">21 Jan</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center">
															
															<div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-warning">
																	<i className="ki-outline ki-color-swatch fs-2 text-warning"></i>
																</span>
															</div>
															
															
															<div className="mb-0 me-2">
																<a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
																<div className="text-gray-400 fs-7">Collection of SVG icons</div>
															</div>
															
														</div>
														
														
														<span className="badge badge-light fs-8">20 March</span>
														
													</div>
													
												</div>
												
												<div className="py-3 text-center border-top">
													<a href="../../demo44/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
													<i className="ki-outline ki-arrow-right fs-5"></i></a>
												</div>
											</div>
											
											<div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
												
												<div className="d-flex flex-column px-9">
													
													<div className="pt-10 pb-0">
														
														<h3 className="text-dark text-center fw-bold">Get Pro Access</h3>
														
														
														<div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
														
														
														<div className="text-center mt-5 mb-9">
															<a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
														</div>
														
													</div>
													
													<div className="text-center px-4">
														<img className="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sketchy-1/1.png" />
													</div>
												</div>
												
											</div>
											
											
											<div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
												
												<div className="scroll-y mh-325px my-5 px-8">
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															<span className="w-70px badge badge-light-success me-4">200 OK</span>
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">Just now</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">2 hrs</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-success me-4">200 OK</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">5 hrs</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">2 days</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-success me-4">200 OK</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">1 week</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-success me-4">200 OK</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">Mar 5</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">May 15</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">Apr 3</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-warning me-4">300 WRN</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">Jun 30</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">Jul 10</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">Sep 10</span>
														
													</div>
													
													
													<div className="d-flex flex-stack py-4">
														
														<div className="d-flex align-items-center me-2">
															
															<span className="w-70px badge badge-light-danger me-4">500 ERR</span>
															
															
															<a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>
															
														</div>
														
														
														<span className="badge badge-light fs-8">Dec 10</span>
														
													</div>
													
												</div>
												
												<div className="py-3 text-center border-top">
													<a href="../../demo44/dist/pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
													<i className="ki-outline ki-arrow-right fs-5"></i></a>
												</div>
											</div>
											
										</div>
									</div>
									
									
								</div>
								<div className="app-navbar-item ms-1 ms-lg-4" id="kt_header_user_menu_toggle">
									<div className="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
										<img className="symbol symbol-35px symbol-md-40px" src="assets/media/avatars/300-5.jpg" alt="user" />
									</div>
									<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
										<div className="menu-item px-3">
											<div className="menu-content d-flex align-items-center px-3">
												<div className="symbol symbol-50px me-5">
													<img alt="Logo" src="assets/media/avatars/300-5.jpg" />
												</div>
												<div className="d-flex flex-column">
													<div className="fw-bold d-flex align-items-center fs-5">Max Smith
													<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
													<a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
												</div>
											</div>
										</div>
										
										
										<div className="separator my-2"></div>
										
										
										<div className="menu-item px-5">
											<a href="../../demo44/dist/account/overview.html" className="menu-link px-5">My Profile</a>
										</div>
										
										
										<div className="menu-item px-5">
											<a href="../../demo44/dist/apps/projects/list.html" className="menu-link px-5">
												<span className="menu-text">My Projects</span>
												<span className="menu-badge">
													<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
												</span>
											</a>
										</div>
										
										
										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title">My Subscription</span>
												<span className="menu-arrow"></span>
											</a>
											
											<div className="menu-sub menu-sub-dropdown w-175px py-4">
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
												</div>
												
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/billing.html" className="menu-link px-5">Billing</a>
												</div>
												
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/statements.html" className="menu-link px-5">Payments</a>
												</div>
												
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
													<span className="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
														<i className="ki-outline ki-information-5 fs-5"></i>
													</span></a>
												</div>
												
												
												<div className="separator my-2"></div>
												
												
												<div className="menu-item px-3">
													<div className="menu-content px-3">
														<label className="form-check form-switch form-check-custom form-check-solid">
															<input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
															<span className="form-check-label text-muted fs-7">Notifications</span>
														</label>
													</div>
												</div>
												
											</div>
										</div>
										
										
										<div className="menu-item px-5">
											<a href="../../demo44/dist/account/statements.html" className="menu-link px-5">My Statements</a>
										</div>
										
										
										<div className="separator my-2"></div>
										
										
										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title position-relative">Mode
												<span className="ms-5 position-absolute translate-middle-y top-50 end-0">
													<i className="ki-outline ki-night-day theme-light-show fs-2"></i>
													<i className="ki-outline ki-moon theme-dark-show fs-2"></i>
												</span></span>
											</a>
											
											<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
												
												<div className="menu-item px-3 my-0">
													<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-night-day fs-2"></i>
														</span>
														<span className="menu-title">Light</span>
													</a>
												</div>
												
												
												<div className="menu-item px-3 my-0">
													<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-moon fs-2"></i>
														</span>
														<span className="menu-title">Dark</span>
													</a>
												</div>
												
												
												<div className="menu-item px-3 my-0">
													<a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-screen fs-2"></i>
														</span>
														<span className="menu-title">System</span>
													</a>
												</div>
												
											</div>
											
										</div>
										
										
										<div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
											<a href="#" className="menu-link px-5">
												<span className="menu-title position-relative">Language
												<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
												<img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
											</a>
											
											<div className="menu-sub menu-sub-dropdown w-175px py-4">
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/settings.html" className="menu-link d-flex px-5 active">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
													</span>English</a>
												</div>
												
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
													</span>Spanish</a>
												</div>
												
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
													</span>German</a>
												</div>
												
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
													</span>Japanese</a>
												</div>
												
												
												<div className="menu-item px-3">
													<a href="../../demo44/dist/account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
													</span>French</a>
												</div>
												
											</div>
										</div>
										
										
										<div className="menu-item px-5 my-1">
											<a href="../../demo44/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
										</div>
										
										
										<div className="menu-item px-5">
											<a href="../../demo44/dist/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
										</div>
										
									</div>
									
								</div>
								<div className="app-navbar-item d-flex align-items-center d-lg-none ms-1 me-n2">
									<a href="#" className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
										<i className="ki-outline ki-burger-menu-2 fs-1"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
  )
}