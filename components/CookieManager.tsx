export default function CookieManager() {
  return (
    <div>
      <div fs-cc="manager" class="fs-cc-manager_component-2">
        <div fs-cc="open-preferences" class="fs-cc-manager_button">
          {
            /* <div class="fs-cc-manager_icon w-embed">
        <svg viewbox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M52.631 30.3899C52.229 30.4443 51.8161 30.4769 51.3924 30.4769C47.5135 30.4769 44.2322 27.9344 43.1022 24.4358C42.9066 23.8382 42.4177 23.371 41.7984 23.2624C35.3553 22.0346 30.4877 16.3847 30.4877 9.5831C30.4877 6.72555 31.3461 4.07445 32.8237 1.86881C33.1714 1.34728 32.8781 0.641046 32.2588 0.521529C30.5529 0.173843 28.8036 0 27 0C12.093 0 0 12.093 0 27C0 41.907 12.093 54 27 54C40.4402 54 51.5553 44.2213 53.6415 31.3678C53.7392 30.7811 53.2068 30.303 52.631 30.3899Z" fill="#4264D1"></path>
            <path d="M14.8093 21.7738C16.7355 21.7738 18.297 20.2123 18.297 18.2861C18.297 16.3599 16.7355 14.7984 14.8093 14.7984C12.883 14.7984 11.3215 16.3599 11.3215 18.2861C11.3215 20.2123 12.883 21.7738 14.8093 21.7738Z" fill="#6CE2FF"></path>
            <path d="M16.5477 38.3215C17.9879 38.3215 19.1554 37.154 19.1554 35.7138C19.1554 34.2737 17.9879 33.1062 16.5477 33.1062C15.1075 33.1062 13.9401 34.2737 13.9401 35.7138C13.9401 37.154 15.1075 38.3215 16.5477 38.3215Z" fill="#6CE2FF"></path>
            <path d="M38.2129 7.06237L37.963 8.56177C37.7565 9.78953 38.4519 10.9956 39.6254 11.441L41.8419 12.2668C43.2978 12.8101 44.9167 11.9626 45.297 10.4523L46.0901 7.3014C46.5791 5.33481 44.7429 3.58551 42.8089 4.16137L40.06 4.98712C39.093 5.26961 38.3759 6.07364 38.2129 7.06237Z" fill="#6CE2FF"></path>
            <path d="M47.0354 16.5477L45.9815 17.0692C45.1557 17.4821 44.7972 18.4708 45.1557 19.3183L46.0032 21.2958C46.5139 22.4909 48.1111 22.7191 48.9477 21.7195L50.3058 20.0897C50.9469 19.3183 50.8056 18.1774 50.0125 17.5799L48.8608 16.7106C48.3284 16.3195 47.6221 16.2543 47.0354 16.5477Z" fill="#6CE2FF"></path>
            <path d="M52.2615 13.06C53.2216 13.06 53.9999 12.2816 53.9999 11.3215C53.9999 10.3614 53.2216 9.5831 52.2615 9.5831C51.3014 9.5831 50.5231 10.3614 50.5231 11.3215C50.5231 12.2816 51.3014 13.06 52.2615 13.06Z" fill="#6CE2FF"></path>
            <path d="M30.2704 50.7296C15.3634 50.7296 3.27042 38.6366 3.27042 23.7296C3.27042 17.1018 5.66076 11.039 9.61569 6.34528C3.73763 11.2998 0 18.7099 0 27C0 41.907 12.093 54 27 54C35.2901 54 42.7002 50.2732 47.6439 44.3952C42.9501 48.3501 36.8873 50.7296 30.2704 50.7296Z" fill="#4264D1"></path>
            <path d="M42.2222 10.2459C40.7662 9.70263 39.897 8.19236 40.1469 6.64951L40.4403 4.86761L40.0274 4.98713C39.0712 5.26963 38.365 6.07365 38.202 7.06238L37.9521 8.56178C37.7457 9.78955 38.4411 10.9956 39.6145 11.4411L41.831 12.2668C43.0044 12.7014 44.2648 12.2342 44.9167 11.2563L42.2222 10.2459Z" fill="#4264D1"></path>
            <path d="M47.8612 20.1658L46.905 17.9276C46.7203 17.5038 46.7095 17.0584 46.8181 16.6455L45.9815 17.0692C45.1557 17.4821 44.7972 18.4708 45.1557 19.3183L46.0032 21.2958C46.5139 22.491 48.1111 22.7191 48.9477 21.7195L49.2845 21.3175C48.6869 21.198 48.1328 20.8069 47.8612 20.1658Z" fill="#4264D1"></path>
            <path d="M16.6563 19.9268C14.7332 19.9268 13.1686 18.3622 13.1686 16.4391C13.1686 15.961 13.2664 15.4938 13.4402 15.0809C12.1907 15.6133 11.3107 16.8519 11.3107 18.2861C11.3107 20.2093 12.8753 21.7739 14.7984 21.7739C16.2435 21.7739 17.4821 20.8938 18.0036 19.6443C17.6016 19.829 17.1344 19.9268 16.6563 19.9268Z" fill="white"></path>
            <path d="M17.9059 36.9634C16.4608 36.9634 15.2982 35.79 15.2982 34.3557C15.2982 33.9863 15.3743 33.6386 15.5155 33.3235C14.592 33.7256 13.9401 34.6491 13.9401 35.7248C13.9401 37.1698 15.1135 38.3324 16.5477 38.3324C17.6234 38.3324 18.5469 37.6805 18.9489 36.757C18.623 36.8873 18.2753 36.9634 17.9059 36.9634Z" fill="white"></path>
            <path d="M33.0954 41.8093C35.0216 41.8093 36.5831 40.2477 36.5831 38.3215C36.5831 36.3953 35.0216 34.8338 33.0954 34.8338C31.1692 34.8338 29.6077 36.3953 29.6077 38.3215C29.6077 40.2477 31.1692 41.8093 33.0954 41.8093Z" fill="#6CE2FF"></path>
            <path d="M34.9425 39.9513C33.0193 39.9513 31.4547 38.3867 31.4547 36.4636C31.4547 35.9855 31.5525 35.5183 31.7264 35.1054C30.4769 35.6378 29.5968 36.8765 29.5968 38.3107C29.5968 40.2338 31.1614 41.7984 33.0845 41.7984C34.5296 41.7984 35.7682 40.9183 36.2898 39.6688C35.8877 39.8535 35.4314 39.9513 34.9425 39.9513Z" fill="white"></path>
            <path d="M27.8063 22.9281C27.9601 21.9804 27.3165 21.0874 26.3688 20.9336C25.421 20.7798 24.5281 21.4234 24.3743 22.3711C24.2205 23.3188 24.864 24.2118 25.8118 24.3656C26.7595 24.5194 27.6525 23.8758 27.8063 22.9281Z" fill="#6CE2FF"></path>
            <path d="M42.6785 35.6487C42.798 35.6487 42.9284 35.6161 43.0371 35.5618C43.4391 35.3553 43.602 34.8664 43.4065 34.4644L42.5373 32.726C42.3308 32.3239 41.8419 32.161 41.4399 32.3565C41.0379 32.563 40.8749 33.0519 41.0705 33.4539L41.9397 35.1924C42.0918 35.4857 42.3743 35.6487 42.6785 35.6487Z" fill="white"></path>
            <path d="M33.0954 30.4225C33.2149 30.4225 33.3453 30.39 33.4539 30.3356L35.1923 29.4664C35.5944 29.26 35.7573 28.771 35.5618 28.369C35.3553 27.967 34.8664 27.804 34.4644 27.9996L32.726 28.8688C32.3239 29.0753 32.161 29.5642 32.3565 29.9662C32.5087 30.2596 32.802 30.4225 33.0954 30.4225Z" fill="white"></path>
            <path d="M8.85515 28.2386C8.9964 28.5211 9.28976 28.6841 9.58312 28.6841C9.70263 28.6841 9.83302 28.6515 9.94167 28.5972C10.3437 28.3908 10.5067 27.9018 10.3111 27.4998L9.44187 25.7614C9.23543 25.3594 8.7465 25.1964 8.34449 25.392C7.94247 25.5984 7.7795 26.0873 7.97507 26.4894L8.85515 28.2386Z" fill="white"></path>
            <path d="M22.2845 41.9505L20.5461 42.8197C20.1441 43.0262 19.9811 43.5151 20.1767 43.9171C20.3179 44.1996 20.6113 44.3626 20.9046 44.3626C21.0242 44.3626 21.1545 44.33 21.2632 44.2757L23.0016 43.4064C23.4036 43.2 23.5666 42.7111 23.371 42.3091C23.1755 41.907 22.6865 41.7441 22.2845 41.9505Z" fill="white"></path>
            <path d="M23.2189 9.00724L22.3497 8.13802C22.0346 7.82293 21.5131 7.82293 21.198 8.13802C20.8829 8.45311 20.8829 8.97464 21.198 9.28973L22.0672 10.1589C22.2302 10.3219 22.4366 10.398 22.6431 10.398C22.8495 10.398 23.0559 10.3219 23.2189 10.1589C23.5449 9.84385 23.5449 9.32233 23.2189 9.00724Z" fill="white"></path>
            <path d="M19.4596 28.1626C19.1445 28.4777 19.1445 28.9992 19.4596 29.3143L20.3288 30.1835C20.4918 30.3465 20.6982 30.4226 20.9047 30.4226C21.1111 30.4226 21.3175 30.3465 21.4805 30.1835C21.7956 29.8684 21.7956 29.3469 21.4805 29.0318L20.6113 28.1626C20.2853 27.8475 19.7747 27.8475 19.4596 28.1626Z" fill="white"></path>
            <path d="M29.6729 47.0354V47.9046C29.6729 48.3501 30.0423 48.7195 30.4877 48.7195C30.9332 48.7195 31.3026 48.3501 31.3026 47.9046V47.0354C31.3026 46.5899 30.9332 46.2205 30.4877 46.2205C30.0423 46.2205 29.6729 46.5791 29.6729 47.0354Z" fill="white"></path>
            <path d="M25.8374 15.3851L26.7067 14.5159C27.0217 14.2008 27.0217 13.6793 26.7067 13.3642C26.3916 13.0491 25.87 13.0491 25.5549 13.3642L24.6857 14.2334C24.3706 14.5485 24.3706 15.07 24.6857 15.3851C24.8487 15.5481 25.0551 15.6241 25.2616 15.6241C25.468 15.6241 25.6745 15.5372 25.8374 15.3851Z" fill="white"></path>
          </g>
          <defs>
            <clippath id="clip0">
              <rect width="54" height="54" fill="white"></rect>
            </clippath>
          </defs>
        </svg>
        </div>
        */
          }

          <div class="fs-cc-compenents">
            <div fs-cc="banner" class="fs-cc-banner_component">
              <div class="fs-cc-banner_container">
                <div class="fs-cc-banner_text">
                  By clicking{" "}
                  <strong>“Accept All Cookies”</strong>, you agree to the
                  storing of cookies on your device to enhance site navigation,
                  analyze site usage, and assist in our marketing efforts. View
                  our{" "}
                  <a href="#" class="fs-cc-banner_text-link">
                    Privacy Policy
                  </a>{" "}
                  for more information.
                </div>
                <div class="fs-cc-banner_buttons-wrapper">
                  <a
                    fs-cc="open-preferences"
                    href="#"
                    class="fs-cc-banner_text-link"
                  >
                    Preferences
                  </a>
                  <a
                    fs-cc="deny"
                    href="#"
                    class="fs-cc-banner_button-2 fs-cc-button-alt w-button"
                  >
                    Deny
                  </a>
                  <a
                    fs-cc="allow"
                    href="#"
                    class="fs-cc-banner_button-2 w-button"
                  >
                    Accept
                  </a>
                </div>
              </div>
              <div fs-cc="interaction" class="fs-cc-banner_trigger"></div>
            </div>
            <div
              fs-cc-scroll="disable"
              fs-cc="preferences"
              class="fs-cc-prefs_component-2 w-form"
            >
              <form
                id="cookie-preferences"
                name="wf-form-Cookie-Preferences"
                data-name="Cookie Preferences"
                method="get"
                class="fs-cc-prefs_form"
                data-wf-page-id="63068f0fdc776cddf6848bac"
                data-wf-element-id="2ed64635-d5b0-7c5b-3f0f-723ada8e9d67"
              >
                <div fs-cc="close" class="fs-cc-prefs_close">
                  <div class="fs-cc-prefs_close-icon w-embed">
                    {
                      /* <svg fill="currentColor" aria-hidden="true" focusable="false" viewbox="0 0 16 24">
                  <path d="M9.414 8l4.293-4.293-1.414-1.414L8 6.586 3.707 2.293 2.293 3.707 6.586 8l-4.293 4.293 1.414 1.414L8 9.414l4.293 4.293 1.414-1.414L9.414 8z"></path>
                </svg> */
                    }
                  </div>
                </div>
                <div class="fs-cc-prefs_content">
                  <div class="fs-cc-prefs_space-small">
                    <div class="fs-cc-prefs_title">
                      Privacy Preference Center
                    </div>
                  </div>
                  <div class="fs-cc-prefs_space-small">
                    <div class="fs-cc-prefs_text">
                      When you visit websites, they may store or retrieve data
                      in your browser. This storage is often necessary for the
                      basic functionality of the website. The storage may be
                      used for marketing, analytics, and personalization of the
                      site, such as storing your preferences. Privacy is
                      important to us, so you have the option of disabling
                      certain types of storage that may not be necessary for the
                      basic functioning of the website. Blocking categories may
                      impact your experience on the website.
                    </div>
                  </div>
                  <div class="fs-cc-prefs_space-medium">
                    <a
                      fs-cc="deny"
                      href="#"
                      class="fs-cc-prefs_button fs-cc-button-alt w-button"
                    >
                      Reject all cookies
                    </a>
                    <a
                      fs-cc="allow"
                      href="#"
                      class="fs-cc-prefs_button w-button"
                    >
                      Allow all cookies
                    </a>
                  </div>
                  <div class="fs-cc-prefs_space-small">
                    <div class="fs-cc-prefs_title">
                      Manage Consent Preferences by Category
                    </div>
                  </div>
                  <div class="fs-cc-prefs_option">
                    <div class="fs-cc-prefs_toggle-wrapper">
                      <div class="fs-cc-prefs_label">Essential</div>
                      <div class="fs-cc-prefs_text">
                        <strong>Always Active</strong>
                      </div>
                    </div>
                    <div class="fs-cc-prefs_text">
                      These items are required to enable basic website
                      functionality.
                    </div>
                  </div>
                  <div class="fs-cc-prefs_option">
                    <div class="fs-cc-prefs_toggle-wrapper">
                      <div class="fs-cc-prefs_label">Marketing</div>
                      <label class="w-checkbox fs-cc-prefs_checkbox-field">
                        <input
                          type="checkbox"
                          id="marketing-2"
                          name="marketing-2"
                          data-name="Marketing 2"
                          fs-cc-checkbox="marketing"
                          class="w-checkbox-input fs-cc-prefs_checkbox"
                        />
                        <span
                          for="marketing-2"
                          class="fs-cc-prefs_checkbox-label w-form-label"
                        >
                          Essential
                        </span>
                        <div class="fs-cc-prefs_toggle"></div>
                      </label>
                    </div>
                    <div class="fs-cc-prefs_text">
                      These items are used to deliver advertising that is more
                      relevant to you and your interests. They may also be used
                      to limit the number of times you see an advertisement and
                      measure the effectiveness of advertising campaigns.
                      Advertising networks usually place them with the website
                      operator’s permission.
                    </div>
                  </div>
                  <div class="fs-cc-prefs_option">
                    <div class="fs-cc-prefs_toggle-wrapper">
                      <div class="fs-cc-prefs_label">Personalization</div>
                      <label class="w-checkbox fs-cc-prefs_checkbox-field">
                        <input
                          type="checkbox"
                          id="personalization-2"
                          name="personalization-2"
                          data-name="Personalization 2"
                          fs-cc-checkbox="personalization"
                          class="w-checkbox-input fs-cc-prefs_checkbox"
                        />
                        <span
                          for="personalization-2"
                          class="fs-cc-prefs_checkbox-label w-form-label"
                        >
                          Essential
                        </span>
                        <div class="fs-cc-prefs_toggle"></div>
                      </label>
                    </div>
                    <div class="fs-cc-prefs_text">
                      These items allow the website to remember choices you make
                      (such as your user name, language, or the region you are
                      in) and provide enhanced, more personal features. For
                      example, a website may provide you with local weather
                      reports or traffic news by storing data about your current
                      location.
                    </div>
                  </div>
                  <div class="fs-cc-prefs_option">
                    <div class="fs-cc-prefs_toggle-wrapper">
                      <div class="fs-cc-prefs_label">Analytics</div>
                      <label class="w-checkbox fs-cc-prefs_checkbox-field">
                        <input
                          type="checkbox"
                          id="analytics-2"
                          name="analytics-2"
                          data-name="Analytics 2"
                          fs-cc-checkbox="analytics"
                          class="w-checkbox-input fs-cc-prefs_checkbox"
                        />
                        <span
                          for="analytics-2"
                          class="fs-cc-prefs_checkbox-label w-form-label"
                        >
                          Essential
                        </span>
                        <div class="fs-cc-prefs_toggle"></div>
                      </label>
                    </div>
                    <div class="fs-cc-prefs_text">
                      These items help the website operator understand how its
                      website performs, how visitors interact with the site, and
                      whether there may be technical issues. This storage type
                      usually doesn’t collect information that identifies a
                      visitor.
                    </div>
                  </div>
                  <div class="fs-cc-prefs_buttons-wrapper">
                    <a
                      fs-cc="submit"
                      href="#"
                      class="fs-cc-prefs_button w-button"
                    >
                      Confirm my preferences and close
                    </a>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    class="fs-cc-prefs_submit-hide w-button"
                    value="Submit"
                  />
                  <div class="w-embed">
                    <style>
                      {".fs-cc-prefs_content{-webkit-overflow-scrolling: touch}"}
                    </style>
                  </div>
                </div>
              </form>
              <div class="w-form-done"></div>
              <div class="w-form-fail"></div>
              <div fs-cc="close" class="fs-cc-prefs_overlay"></div>
              <div fs-cc="interaction" class="fs-cc-prefs_trigger"></div>
            </div>
          </div>
        </div>
        <div fs-cc="interaction" class="fs-cc-manager_trigger"></div>
      </div>
      <div class="fs-cc-compenents">
        <div fs-cc="banner" class="fs-cc-banner_component">
          <div class="fs-cc-banner_container">
            <div class="fs-cc-banner_text">
              By clicking{" "}
              <strong>“Accept All Cookies”</strong>, you agree to the storing of
              cookies on your device to enhance site navigation, analyze site
              usage, and assist in our marketing efforts. View our{" "}
              <a href="#" class="fs-cc-banner_text-link">
                Privacy Policy
              </a>{" "}
              for more information.
            </div>
            <div class="fs-cc-banner_buttons-wrapper">
              <a
                fs-cc="open-preferences"
                href="#"
                class="fs-cc-banner_text-link"
              >
                Preferences
              </a>
              <a
                fs-cc="deny"
                href="#"
                class="fs-cc-banner_button-2 fs-cc-button-alt w-button"
              >
                Deny
              </a>
              <a fs-cc="allow" href="#" class="fs-cc-banner_button-2 w-button">
                Accept
              </a>
            </div>
          </div>
          <div fs-cc="interaction" class="fs-cc-banner_trigger"></div>
        </div>
        <div
          fs-cc-scroll="disable"
          fs-cc="preferences"
          class="fs-cc-prefs_component-2 w-form"
        >
          <form
            id="cookie-preferences"
            name="wf-form-Cookie-Preferences"
            data-name="Cookie Preferences"
            method="get"
            class="fs-cc-prefs_form"
            data-wf-page-id="63068f0fdc776cddf6848bac"
            data-wf-element-id="2ed64635-d5b0-7c5b-3f0f-723ada8e9d67"
          >
            <div fs-cc="close" class="fs-cc-prefs_close">
              <div class="fs-cc-prefs_close-icon w-embed">
                {
                  /* <svg fill="currentColor" aria-hidden="true" focusable="false" viewbox="0 0 16 24">
              <path d="M9.414 8l4.293-4.293-1.414-1.414L8 6.586 3.707 2.293 2.293 3.707 6.586 8l-4.293 4.293 1.414 1.414L8 9.414l4.293 4.293 1.414-1.414L9.414 8z"></path>
            </svg> */
                }
              </div>
            </div>
            <div class="fs-cc-prefs_content">
              <div class="fs-cc-prefs_space-small">
                <div class="fs-cc-prefs_title">Privacy Preference Center</div>
              </div>
              <div class="fs-cc-prefs_space-small">
                <div class="fs-cc-prefs_text">
                  When you visit websites, they may store or retrieve data in
                  your browser. This storage is often necessary for the basic
                  functionality of the website. The storage may be used for
                  marketing, analytics, and personalization of the site, such as
                  storing your preferences. Privacy is important to us, so you
                  have the option of disabling certain types of storage that may
                  not be necessary for the basic functioning of the website.
                  Blocking categories may impact your experience on the website.
                </div>
              </div>
              <div class="fs-cc-prefs_space-medium">
                <a
                  fs-cc="deny"
                  href="#"
                  class="fs-cc-prefs_button fs-cc-button-alt w-button"
                >
                  Reject all cookies
                </a>
                <a fs-cc="allow" href="#" class="fs-cc-prefs_button w-button">
                  Allow all cookies
                </a>
              </div>
              <div class="fs-cc-prefs_space-small">
                <div class="fs-cc-prefs_title">
                  Manage Consent Preferences by Category
                </div>
              </div>
              <div class="fs-cc-prefs_option">
                <div class="fs-cc-prefs_toggle-wrapper">
                  <div class="fs-cc-prefs_label">Essential</div>
                  <div class="fs-cc-prefs_text">
                    <strong>Always Active</strong>
                  </div>
                </div>
                <div class="fs-cc-prefs_text">
                  These items are required to enable basic website
                  functionality.
                </div>
              </div>
              <div class="fs-cc-prefs_option">
                <div class="fs-cc-prefs_toggle-wrapper">
                  <div class="fs-cc-prefs_label">Marketing</div>
                  <label class="w-checkbox fs-cc-prefs_checkbox-field">
                    <input
                      type="checkbox"
                      id="marketing-2"
                      name="marketing-2"
                      data-name="Marketing 2"
                      fs-cc-checkbox="marketing"
                      class="w-checkbox-input fs-cc-prefs_checkbox"
                    />
                    <span
                      for="marketing-2"
                      class="fs-cc-prefs_checkbox-label w-form-label"
                    >
                      Essential
                    </span>
                    <div class="fs-cc-prefs_toggle"></div>
                  </label>
                </div>
                <div class="fs-cc-prefs_text">
                  These items are used to deliver advertising that is more
                  relevant to you and your interests. They may also be used to
                  limit the number of times you see an advertisement and measure
                  the effectiveness of advertising campaigns. Advertising
                  networks usually place them with the website operator’s
                  permission.
                </div>
              </div>
              <div class="fs-cc-prefs_option">
                <div class="fs-cc-prefs_toggle-wrapper">
                  <div class="fs-cc-prefs_label">Personalization</div>
                  <label class="w-checkbox fs-cc-prefs_checkbox-field">
                    <input
                      type="checkbox"
                      id="personalization-2"
                      name="personalization-2"
                      data-name="Personalization 2"
                      fs-cc-checkbox="personalization"
                      class="w-checkbox-input fs-cc-prefs_checkbox"
                    />
                    <span
                      for="personalization-2"
                      class="fs-cc-prefs_checkbox-label w-form-label"
                    >
                      Essential
                    </span>
                    <div class="fs-cc-prefs_toggle"></div>
                  </label>
                </div>
                <div class="fs-cc-prefs_text">
                  These items allow the website to remember choices you make
                  (such as your user name, language, or the region you are in)
                  and provide enhanced, more personal features. For example, a
                  website may provide you with local weather reports or traffic
                  news by storing data about your current location.
                </div>
              </div>
              <div class="fs-cc-prefs_option">
                <div class="fs-cc-prefs_toggle-wrapper">
                  <div class="fs-cc-prefs_label">Analytics</div>
                  <label class="w-checkbox fs-cc-prefs_checkbox-field">
                    <input
                      type="checkbox"
                      id="analytics-2"
                      name="analytics-2"
                      data-name="Analytics 2"
                      fs-cc-checkbox="analytics"
                      class="w-checkbox-input fs-cc-prefs_checkbox"
                    />
                    <span
                      for="analytics-2"
                      class="fs-cc-prefs_checkbox-label w-form-label"
                    >
                      Essential
                    </span>
                    <div class="fs-cc-prefs_toggle"></div>
                  </label>
                </div>
                <div class="fs-cc-prefs_text">
                  These items help the website operator understand how its
                  website performs, how visitors interact with the site, and
                  whether there may be technical issues. This storage type
                  usually doesn’t collect information that identifies a visitor.
                </div>
              </div>
              <div class="fs-cc-prefs_buttons-wrapper">
                <a fs-cc="submit" href="#" class="fs-cc-prefs_button w-button">
                  Confirm my preferences and close
                </a>
              </div>
              <input
                type="submit"
                data-wait="Please wait..."
                class="fs-cc-prefs_submit-hide w-button"
                value="Submit"
              />
              <div class="w-embed">
                <style>
                  {".fs-cc-prefs_content{-webkit-overflow-scrolling: touch}"}
                </style>
              </div>
            </div>
          </form>
          <div class="w-form-done"></div>
          <div class="w-form-fail"></div>
          <div fs-cc="close" class="fs-cc-prefs_overlay"></div>
          <div fs-cc="interaction" class="fs-cc-prefs_trigger"></div>
        </div>
      </div>
    </div>
  );
}
